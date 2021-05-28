export default function Input({ className, register, ...props }) {
  return (
    <input
      className={`block w-full text-lg px-3 py-2 border rounded-lg ${className}`}
      ref={register}
      {...props}
    />
  );
}
