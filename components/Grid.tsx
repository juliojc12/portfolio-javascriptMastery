import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "About", description: "Learn more about me", id: 1 }].map(
          (item, index) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}
