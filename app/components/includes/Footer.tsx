import CircularText from "../ui/CircularText";

export default function Footer() {
  return (
    <footer>
      <CircularText
        text="HIRE*ME*HIRE*ME*HIRE*ME*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class text-black"
      />
    </footer>
  );
}
