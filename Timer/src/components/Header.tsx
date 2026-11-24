type Props = {
    title: string;
};

export default function Header({ title}: Props) {
    return (
        <div className="header">
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
}
