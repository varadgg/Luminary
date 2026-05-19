export default function SearchSection({ search, setSearch }) {
  return (
    <section className="py-6 lg:py-10 px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-full p-[2px] bg-gradient-to-r from-primary/60 via-tertiary/60 to-secondary/60 shadow-[0_0_60px_rgba(192,193,255,0.2)]">
          <div className="flex items-center bg-surface-container rounded-full px-5 lg:px-8 py-4 lg:py-6 w-full">
            <span className="material-symbols-outlined text-primary mr-3 lg:mr-4 text-2xl lg:text-3xl">search</span>
            <input
              className="w-full bg-transparent text-on-surface text-base lg:text-xl placeholder:text-on-surface-variant/60 focus:outline-none border-none p-0"
              placeholder="Search your course (e.g. Web Development, Data Science, AI…)"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="ml-2 text-on-surface-variant/60 hover:text-on-surface transition-colors shrink-0"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
