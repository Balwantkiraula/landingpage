import { Container } from "./Container";

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

