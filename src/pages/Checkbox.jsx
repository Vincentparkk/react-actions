export default function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      <span style={{ fontWeight: "bold" }}>{children}</span>
    </label>
  );
}
