import { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { Button, ButtonsContainer } from "../Button";

interface IProps {
    inputs: {
        id: string;
        label: string;
        placeholder?: string;
        type?: InputHTMLAttributes<HTMLInputElement>["type"];
        isRequired?: boolean;
    }[];
    buttonLabel?: string;
    onSubmit: (formData: any) => void;
}

export const Form: React.FC<IProps> = ({ inputs, buttonLabel, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {inputs.map(
                ({ id, label, placeholder, type, isRequired: required }) => (
                    <div key={id} className="flex flex-col justify-between">
                        <label htmlFor={id}>{label}</label>

                        <input
                            placeholder={placeholder}
                            type={type || "text"}
                            {...register(id, { required })}
                        />

                        {errors.id?.type === "required" && <p>Is required</p>}
                    </div>
                )
            )}

            <ButtonsContainer>
                <Button label={buttonLabel || "Submit"} type="submit" />
            </ButtonsContainer>
        </form>
    );
};
