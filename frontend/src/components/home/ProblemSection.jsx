import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function ProblemSection() {
  const { ref, opacity, y } = useScrollAnimation([0, 0.35]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="py-32 relative bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-4 tracking-tighter">Education is Broken.</h2>
          <div className="h-1 w-24 bg-error-dim"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-error-container/20 border border-error-container/30 text-error">
              <span className="material-symbols-outlined text-3xl">currency_rupee</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Insane Fees</h3>
            <p className="text-on-surface-variant leading-relaxed">Universities and bootcamps charge lakhs for outdated content, putting students in a debt trap before they even start their careers.</p>
          </div>
          <div className="group">
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-error-container/20 border border-error-container/30 text-error">
              <span className="material-symbols-outlined text-3xl">history_edu</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Outdated Theory</h3>
            <p className="text-on-surface-variant leading-relaxed">Curriculums are stuck in 2010. Industry requirements move at lightning speed, while classrooms move at a snail's pace.</p>
          </div>
          <div className="group">
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-error-container/20 border border-error-container/30 text-error">
              <span className="material-symbols-outlined text-3xl">search_off</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">The Job Gap</h3>
            <p className="text-on-surface-variant leading-relaxed">A degree doesn't guarantee a job anymore. Companies want builders, not just certificate holders with zero hands-on experience.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
