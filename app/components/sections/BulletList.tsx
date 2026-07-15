export default function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-none m-0 p-0 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: "linear-gradient(135deg, var(--color-cyan-400), var(--color-magenta-400))" }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
