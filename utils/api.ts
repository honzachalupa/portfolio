"use server";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type ApiOptions<TRequestBody = unknown> = {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: TRequestBody;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
};

type ApiResponse<TData> = {
  data: TData | null;
  error: Error | null;
  status: number;
  statusText: string;
  ok: boolean;
};

/**
 * A utility function for making API calls with proper error handling
 *
 * @param url The URL to fetch from. Can be a relative path (will be prefixed with NEXT_PUBLIC_API_URL) or a full URL
 * @param options Request options including method, headers, body, and cache settings
 * @returns A structured response with data, error information, and status details
 *
 * @example
 * // Basic GET request
 * const { data, error } = await fetchApi('/api/users');
 *
 * @example
 * // POST request with body
 * const { data, error, ok } = await fetchApi('/api/users', {
 *   method: 'POST',
 *   body: { name: 'John Doe', email: 'john@example.com' }
 * });
 *
 * @example
 * // With cache control
 * const { data } = await fetchApi('/api/products', {
 *   revalidate: 3600, // Cache for 1 hour
 *   tags: ['products']
 * });
 */
export async function fetchApi<TData = any, TRequestBody = any>(
  url: string,
  options: ApiOptions<TRequestBody> = {}
): Promise<ApiResponse<TData>> {
  // Determine if URL is relative or absolute
  const isRelativeUrl = !url.startsWith("http");
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const fullUrl = isRelativeUrl
    ? `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`
    : url;

  // Default response structure
  const response: ApiResponse<TData> = {
    data: null,
    error: null,
    status: 0,
    statusText: "",
    ok: false,
  };

  try {
    // Prepare fetch options
    const fetchOptions: RequestInit = {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...(options.body && {
        body: JSON.stringify(options.body),
      }),
      cache: options.cache,
      next: options.revalidate
        ? { revalidate: options.revalidate }
        : options.tags
        ? { tags: options.tags }
        : undefined,
    };

    // Execute fetch
    const fetchResponse = await fetch(fullUrl, fetchOptions);

    // Update response with status information
    response.status = fetchResponse.status;
    response.statusText = fetchResponse.statusText;
    response.ok = fetchResponse.ok;

    // Handle successful response
    if (fetchResponse.ok) {
      // Check content type to determine how to parse the response
      const contentType = fetchResponse.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        response.data = await fetchResponse.json();
      } else if (contentType?.includes("text/")) {
        // For text responses, store as string
        const textData = await fetchResponse.text();
        response.data = textData as unknown as TData;
      } else {
        // For other types (like blobs), store the raw response
        response.data = fetchResponse as unknown as TData;
      }
    } else {
      // Handle error responses
      try {
        // Try to parse error as JSON
        const errorData = await fetchResponse.json();
        response.error = new Error(
          errorData.message ||
            errorData.error ||
            `API error: ${fetchResponse.status} ${fetchResponse.statusText}`
        );
      } catch {
        // If error can't be parsed as JSON, use status text
        response.error = new Error(
          `API error: ${fetchResponse.status} ${fetchResponse.statusText}`
        );
      }
    }
  } catch (error) {
    // Handle network or other errors
    response.error =
      error instanceof Error
        ? error
        : new Error("Unknown error occurred during API request");

    console.error("API request failed:", response.error);
  }

  return response;
}

/**
 * Utility function for making GET requests
 * @param url The URL to fetch from
 * @param options Request options
 * @param options.disableCache Set to true to disable default caching
 */
export async function get<TData = any>(
  url: string,
  options: Omit<ApiOptions, "method" | "body"> & { disableCache?: boolean } = {}
): Promise<ApiResponse<TData>> {
  const { disableCache, ...restOptions } = options;

  // Apply default caching unless explicitly disabled
  const cacheOptions = disableCache
    ? {}
    : {
        cache: options.cache || "force-cache",
        revalidate: options.revalidate || 3600, // Default to 1 hour cache
      };

  return fetchApi<TData>(url, {
    ...restOptions,
    ...cacheOptions,
    method: "GET",
  });
}

/**
 * Utility function for making POST requests
 */
export async function post<TData = any, TRequestBody = any>(
  url: string,
  body: TRequestBody,
  options: Omit<ApiOptions<TRequestBody>, "method" | "body"> = {}
): Promise<ApiResponse<TData>> {
  return fetchApi<TData, TRequestBody>(url, {
    ...options,
    method: "POST",
    body,
  });
}

/**
 * Utility function for making PUT requests
 */
export async function put<TData = any, TRequestBody = any>(
  url: string,
  body: TRequestBody,
  options: Omit<ApiOptions<TRequestBody>, "method" | "body"> = {}
): Promise<ApiResponse<TData>> {
  return fetchApi<TData, TRequestBody>(url, {
    ...options,
    method: "PUT",
    body,
  });
}

/**
 * Utility function for making DELETE requests
 */
export async function del<TData = any>(
  url: string,
  options: Omit<ApiOptions, "method"> = {}
): Promise<ApiResponse<TData>> {
  return fetchApi<TData>(url, { ...options, method: "DELETE" });
}

/**
 * Utility function for making PATCH requests
 */
export async function patch<TData = any, TRequestBody = any>(
  url: string,
  body: TRequestBody,
  options: Omit<ApiOptions<TRequestBody>, "method" | "body"> = {}
): Promise<ApiResponse<TData>> {
  return fetchApi<TData, TRequestBody>(url, {
    ...options,
    method: "PATCH",
    body,
  });
}
