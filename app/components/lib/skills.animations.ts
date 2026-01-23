import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RunSkillsAnimationsParams = {
  container: HTMLElement | null;
  titleEl: HTMLDivElement | null;
  cardsEl: HTMLDivElement | null;
};

export function runSkillsAnimations({
  container,
  titleEl,
  cardsEl,
}: RunSkillsAnimationsParams) {
  if (!container) return () => {};
  
  const ctx = gsap.context(() => {
    // Title chars
    const titleChars = titleEl?.querySelectorAll(".char");
    if (titleChars?.length) {
      gsap.set(titleChars, { y: 100, opacity: 0 });
      gsap.to(titleChars, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.03,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Subtitle
    const subtitle = titleEl?.querySelector(".subtitle");
    if (subtitle) {
      gsap.from(subtitle, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cards
    const cards = cardsEl?.querySelectorAll(".skill-card");
    if (cards?.length) {
      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -60 : 60;

        gsap.from(card, {
          x: direction,
          y: 80,
          opacity: 0,
          rotation: index % 2 === 0 ? -3 : 3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        const skillItems = card.querySelectorAll(".skill-item");
        if (skillItems?.length) {
          gsap.from(skillItems, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Hover
        const cardTitle = card.querySelector(".card-title");
        const cardLine = card.querySelector(".card-line");

        const onEnter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(cardLine, {
            width: "100%",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(cardTitle, {
            color: "#ef4444",
            duration: 0.3,
          });
          gsap.to(skillItems, {
            x: 8,
            stagger: 0.02,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(cardLine, {
            width: "48px",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(cardTitle, {
            color: "#ffffff",
            duration: 0.3,
          });
          gsap.to(skillItems, {
            x: 0,
            stagger: 0.02,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);

        ScrollTrigger.addEventListener("refreshInit", () => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    // Float elements
    gsap.to(".float-element", {
      y: -20,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  }, container);

  return () => ctx.revert();
}
