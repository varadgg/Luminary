export default function StorySection() {
  return (
    <section className="w-full bg-surface py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 relative z-10">
          <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
          <p className="text-on-surface text-lg leading-loose">
            We started Luminary because we were tired of the status quo. Expensive courses that promised the moon but delivered outdated theory. A lack of real guidance when we hit dead ends. And worst of all, spending months learning without gaining any tangible, hirable skills.
          </p>
          <div className="p-8 border-l-4 border-primary bg-primary/5 rounded-r-2xl ambient-glow">
            <p className="text-2xl font-medium italic text-on-surface leading-relaxed">"We built the platform we wish we had when we started."</p>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-outline-variant/20 aspect-video ambient-shadow">
          <img alt="Students collaborating on a laptop in a modern study space with warm natural light" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" data-alt="Students collaborating on a laptop in a modern study space with warm natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBir4vIAFVq49RkcKkEvBmt_KtOxpHCu0xgrM8XdJ6TA4Sbb38W3vGJB-U7kE3ardX5dhcvxY9sqvGz-joU9CQAcY2AYhWWlwsTYsPSVbPbNKXq9Ps4rYpX8zG1WxFTKFObRGj59x9-eMgnR1vaunmW5GdlKYo8I5wi71WCZZrP2HlcR4w2B39ssvs4HVS40Zv6J2BpVlG7JfygAoCObB6V49Td9PzPh2BMZvUNEM00J9LsUZx8KpOilKZG8NM_GEzBwWfE147law"/>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
}
