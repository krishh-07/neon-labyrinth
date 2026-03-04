import { Scene } from "../types/story";

export const storyData: Record<string, Scene> = {
  start: {
    id: "start",
    title: "The Rain-Slicked Alley",
    description: "You wake up behind a dumpster in Sector 7. Your head throbs with a digital hum. A neon sign flickers above: 'NO FUTURE'. In your pocket, you feel a cold, metallic data chip.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Check the data chip", nextSceneId: "check_chip", grantItem: "Encrypted Chip" },
      { text: "Head toward the main street", nextSceneId: "main_street" }
    ]
  },
  check_chip: {
    id: "check_chip",
    title: "The Encrypted Data",
    description: "The chip glows with a faint blue light. It's labeled 'Project Chimera'. Suddenly, a drone sweeps the alley with a red spotlight. You need to move.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Hide behind the crates", nextSceneId: "hide_crates" },
      { text: "Run for the subway", nextSceneId: "subway_run" }
    ]
  },
  main_street: {
    id: "main_street",
    title: "Sector 7 High Street",
    description: "The street is a blur of holographic ads and faceless crowds. A street vendor eyes your ragged clothes. 'You look like you've seen a ghost, kid,' he rasps.",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Ask about 'Project Chimera'", nextSceneId: "ask_vendor" },
      { text: "Keep walking and blend in", nextSceneId: "blend_in" }
    ]
  },
  hide_crates: {
    id: "hide_crates",
    title: "Narrow Escape",
    description: "The drone passes overhead, its mechanical whir fading into the distance. You find a discarded neural-link cable among the trash.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Take the cable and head to the docks", nextSceneId: "docks", grantItem: "Neural Cable" },
      { text: "Go back to the main street", nextSceneId: "main_street" }
    ]
  },
  subway_run: {
    id: "subway_run",
    title: "The Underground",
    description: "You leap onto a departing mag-lev train just as the doors hiss shut. A group of corporate enforcers is searching the next car. You need a disguise.",
    image: "https://images.unsplash.com/photo-1473163928189-3f4b2c7e33e6?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Steal a technician's jacket", nextSceneId: "technician_disguise", grantItem: "Corp Jacket" },
      { text: "Jump off at the next dark tunnel", nextSceneId: "tunnel_jump" }
    ]
  },
  ask_vendor: {
    id: "ask_vendor",
    title: "Dangerous Questions",
    description: "The vendor's eyes widen. 'Quiet! The walls have ears.' He scribbles an address on a napkin. 'Go to the 'Black Hole' bar. Ask for Nyx.'",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Go to the Black Hole bar", nextSceneId: "bar_arrival" },
      { text: "Ignore him and head to the docks", nextSceneId: "docks" }
    ]
  },
  bar_arrival: {
    id: "bar_arrival",
    title: "The Black Hole Bar",
    description: "The air is thick with synthetic smoke and heavy bass. You see a woman with silver hair and cybernetic eyes sitting in the corner. That must be Nyx.",
    image: "https://images.unsplash.com/photo-1514525253361-bee871871771?auto=format&fit=crop&q=80&w=1000",
    choices: [
      { text: "Show her the chip", nextSceneId: "nyx_reveal", requiredItem: "Encrypted Chip" },
      { text: "Buy a drink and listen", nextSceneId: "listen_in" }
    ]
  },
  nyx_reveal: {
    id: "nyx_reveal",
    title: "The Truth Unveiled",
    description: "Nyx slots the chip into her arm. Her eyes glow white. 'This is the master key to the city's power grid. You've started a revolution, kid.'",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    isEnd: true,
    choices: [
      { text: "Start Over", nextSceneId: "start" }
    ]
  },
  tunnel_jump: {
    id: "tunnel_jump",
    title: "The Abyss",
    description: "You jump into the darkness. The fall is longer than expected. You land in the deep sewers, lost and alone. The city above forgets you.",
    image: "https://images.unsplash.com/photo-1505832426821-4522132fc3ae?auto=format&fit=crop&q=80&w=1000",
    isEnd: true,
    choices: [
      { text: "Try Again", nextSceneId: "start" }
    ]
  }
};