type Props = {
    image: string;
};

export default function PetAvatar({ image }: Props) {
    return (
        <div className="pet-avatar">
            <img src={image} alt="Аватар улюбленця" />
        </div>
    );
}
