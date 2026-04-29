import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Container: scale up + fade as it enters view
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.35], [40, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <motion.div
          className="p-16 rounded-[3rem] bg-gradient-to-br from-surface-container-high to-slate-900 border border-outline-variant/20 shadow-2xl relative overflow-hidden group"
          style={{ scale, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h2 className="text-4xl md:text-7xl font-headline font-extrabold mb-8 tracking-tighter leading-none">
            Your Career <br />Starts <span className="text-primary italic">Here.</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Join thousands of students building their dream careers with Luminary. Limited seats available for the next cohort.</p>
          <div className="flex flex-col items-center justify-center space-y-12">
            <Link to="/register">
              <motion.button
                className="px-12 py-6 rounded-2xl bg-on-background text-background font-black text-xl hover:bg-primary hover:text-on-primary transition-all shadow-xl hover:shadow-primary/30 active:scale-95 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0px 0px 10px rgba(168,85,247,0.3)',
                    '0px 0px 40px rgba(168,85,247,0.6)',
                    '0px 0px 10px rgba(168,85,247,0.3)',
                  ]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >Join Now</motion.button>
            </Link>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              <img alt="Logo of a major tech corporation partner" className="h-6 filter invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmcDSooCqLrTnG854kzVi0wX5jztcutl6bjI0NLq0TOB6J1xfrt0eqwb2gOb2UxqDeqKpe3iySuFttIGp48BqVSO1hGhGEYe1OMRISbV4z_AGi2FwLqXmz9Vsnu7KD6-k2B-Pk7_GrM7NDYjHoHmbYhjBI9xwG6exAGajvETd8hJtrAhSlgt95wxRKSiTZ7EANeDNSTZSqAGaiksJ30g7DIt6KAexDLoKu6idTfgrge-CWPkdsheJNxcBoNitBAErzLb04aPEeZOc" />
              <img alt="Logo of a major tech corporation partner" className="h-6 filter invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYD9TgOOYVth2gk_i3Xql1_HtAd2DEEHr0f4VWK1KqEKyGCxfe1Fmwjhv-MK8T2V3XnSLepk677_alGF98adWFFtOdZKx36v3vyvWIGHmLVZGPJTeH62mcVW0ilotog9YVY2eQBnjnSfZg_TrrVgRyB18j3SLd6cC7Zm0EeuDpbcU8OoGzjbGokg_JhaFpJowM-epCPDBIqieuiLFRTTIJZXRz5vIvRpqM4-1ZbNuao_vLatz2nEBRDhVkK_On4zIk7EKXNH0w4Ps" />
              <img alt="Logo of a major tech corporation partner" className="h-6 filter invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDqcgW-vtBiwkIVlZqY1gtAraREzXWj4ncxEG1z2FX9-deeWUi0TTBXLhLZW6V-0Tb8Zp1hbMZdYRGMIhRiYt_yGetNtwQo00XSOhGfeaD08T5sJGWHae2WayYYISzCOEzqWiYFKQ_MypWvKSRL1xMgpIban2tBxe4doF-x2GJh_4ZKDshmlY7aSgJc9loO7L7wtvVeFwMJYQlYRsW4DFcmfltmOWA88iaKRmnyT9tP7FSAIHK6bCYpbV_rsmBe7gkAAPYVJTyt0c" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
