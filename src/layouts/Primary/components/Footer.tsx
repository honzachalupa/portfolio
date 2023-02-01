import moment from "moment";

export const Footer: React.FC = () => (
    <footer className="relative mb-20 text-center text-sm">
        <p className="mb-2 text-white opacity-75">
            Copyright © 2008 - {moment().year()} Jan Chalupa
        </p>

        <p className="text-white opacity-30">All rights reserved.</p>
    </footer>
);
