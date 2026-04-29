import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Full Stack Web Engineering",
    description: "Build real-world web apps powered by AI — from frontend to intelligent backend systems.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoGg222OwVtRQjrPr2Ydsakr-CVz5JQPYmyV0_Mat95DZcVANiWtPd1xxHsqYw1HtoBH1LFO1_S40MVrSyiwUjZIFSytuylnEqgQotA2dALAy81HpAfvqVG0nWlSv6fAhsPwPutc3dBTiLkxhN0kEEHrHJfXZyN2VY220hH_KVJqkW7VlxmPNf8Tpdy-ePCdgU50Kzpk-fexTunsBnjB0o9YhCJs8ej65vjw_W1Aqso5Vf17xBe0OaGrWQ4nUDA0xXR_y4KLLW_g",
    badge: "High Demand",
    color: "primary",
    featured: true
  },
  {
    id: 2,
    title: "Data Science & AI",
    description: "Analyze data, build ML models, and solve real-world problems with industry tools.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgTIkwARuhVaMncjnqj02Lf0bJrzfMPOYlW3p21XJFsYIBJF0GUXQyunXAn47SK3QBAsQRvlYkA22dKy65JzqGNM4-iSlQgSCrsAGoCSjxI4RKVG-0AFpseJTJL5htHjcQtnQahSvmReFJGaecpOTX-ymabkFQhdUBwJzMPkoicQcErzXstaD6UPupeaFAZaTP1VguVUIfl3mg9--APRNmhi7cp296f6LYWYQ-cJoqUXCPoImZzyyPF4wz1p5aftnq7Cr_PjEaAA",
    badge: "Trending",
    color: "secondary",
    featured: true
  },
  {
    id: 3,
    title: "Generative AI Engineering",
    description: "Create and deploy LLM-powered apps using modern AI frameworks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaJo-VlU128rSsWI1IHr1AwXcmsIah9O3o54-9_sppftw_FoUEyXDqWIRGj2IIdumq1PbAB99_X98Yo9AcHw5etb4tPnRifgaz-Ii7j9qzTfFUoDq4OFBkzOOItMquOKDBdG2RiDlhMbAWYwwHz1CGKRuTS2VwackxVCgDRAqnqjtz1H_hd__0Ih4ujROrrHWFGcSV-3ADknRXyjjBIrLlOkkNdVhtj2jFPFD729sAxkR83dIIrzLbMlFPrQmwEuFbshPj8ep1zw",
    badge: "New Arrival",
    color: "tertiary",
    featured: true
  },
  {
    id: 4,
    title: "Enterprise Java Full Stack",
    description: "Develop scalable enterprise applications with Java, Spring Boot, and modern front-ends.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOuFEyHyLJKi8h9hLXfhMWbU85w_YqJ4A5bSwA_oIAKfAWupJQoYD0Dj88-ANunfkdMMjbNCYi32IC_EGn799hllt78a5wVPbtwTKH6lY9CQ9gorIjT20RfiDaLS679wZ6ibHSV4AkiVj4lDdJ6UwRE_bLgvSnguNc47UwO4-uoUxC_q8ZkOsu3MuyKR0s8CJn9gE9lpqqKmu_wRfvXKByzar_W4NGLc2vofaeCZL5NaUfrvYPIx7jitz0HydpH-8Qp4kwwxR0hA"
  },
  {
    id: 5,
    title: "DSA Interview Mastery",
    description: "Master Data Structures & Algorithms to confidently crack top tech company interviews.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCG2_mwKEqrWLl1rXfvdLwhW0n3kryPseJHohf2sLwGlnPhb7YveGjpp11M7mojZUaWn2l2zDH7MjHW9LOyTQveRPddovVrBspWHFnarok-KmCCSuViZF25uoDH6Xi5y2vcdxfNXgz2alard8FZJY_dUeigqI1ySPI4hQl697fnx_JnxLK2gCt7vbN6vnBh-6Ti0x_gCWYWZEPQNaqg1Tu2RGbkbRkmuODrri6rJ9YNMP9SKvZFPIrrtOVSA_c828Dgb4_WOc01g"
  },
  {
    id: 6,
    title: "Cloud Computing (AWS)",
    description: "Design, deploy, and manage scalable infrastructure using AWS and cloud-native technologies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVuhfZstnnYPDlQqVT7FURcL8HdjxLl6hQd6jiyYmsSlM7M-aH1e-8T304x3yFXwOEfW3ehufVa7BFlBwN0JJWNxe0hZXUfhnsc2D_CSJ56YSVC_MuC_RDs87FVonzMNsK92uz29PVh6fdTOAdO7SApSxUEKEu6OohPUmEGp_5DepiptBk82_vU3M5xUDoBVCiRa0Nrtl4efFtb1gsICPcltMv1g6UUIct1fHS50z6-ZSMsFkPzcU-2qrutKMXueyPNzsP5Eq5hA"
  },
  {
    id: 7,
    title: "Android App Development",
    description: "Build robust, native mobile applications from scratch using modern Android development tools.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMMfLSXIplzQD2ShHvoG1Ylstnxn_d_MYifWCycJkvO6sQoV0HwwJ5J8vHG4UDNatynCd_AKaKNy060eOUTSeSos14n3-mkZWBotvv1eX9ah5MRWeFWPg7TsrsB9s5bAdyEI7iLCK0NHRgXhoetaMRfAWBR-A3YhuYf-BfAamAuhhHAKa4G49WyEcimgdk9Pwwfkpc6_z3cx4ICIJjgZCkt8s1X9iIr8wwCj8sYrsErZ6YC0q1R6Yf16DRwDDYNO8PnEtBi8ZcOg"
  },
  {
    id: 8,
    title: "Intelligent Automation (RPA)",
    description: "Automate enterprise workflows and build intelligent software robots with top RPA platforms.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFwYX3Ns6gzFsGYqHFNft1U5NfyJzgCpIRpIdL_azmnIsdGeTLbjGiApQyiCHFHO0aecwryejjomwCNgwRbXizb1gJAj9auyUSiQk9gWuer1ebrSgoxbsSrFhUwGRxw9ZY5Pix7h8UNQIZeUGxEx1LPd6txwDsHxeS3TmT8qxt2a75wAVVwggzZ5kAm38MGnn539d_vH62nOtg-7rjjE5IrX3slKzLD3nUDWNyicwIa0WD9li90GT-mHvOtBGuC_rt0qf1q8A-w"
  },
  {
    id: 9,
    title: "MATLAB for Engineers",
    description: "Master computational mathematics, data analysis, and algorithm development with MATLAB.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4lZAmwej_El8Rrr38BJl8IXPyzpS1Z1ByWS7hz8jiIAYEDt2KaEwOfCDA5GtnT1rH6oWce7qkKERAtws-Cr2yWAikYOPlISTK32iirJTwtIHRiuuMJZbaP_nNu5M2Xqy1o0WaatsHc1jAZCV0FC819BjgbulJAs4S99BOQfnotMH-u-Z14WRW-l59Z_M14FCtjmzp4rpczrrrMqdsb2qbM6wq2uK6ED4dqBctXu555KAjrUWH5aQha1VEBuKxZvSMzDiSKYvNvg"
  },
  {
    id: 10,
    title: "AI & Machine Learning",
    description: "Dive deep into neural networks, deep learning, and advanced AI concepts for modern applications.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsQtRntD31zFLot914xEKKe9cf7C4ljD2ClkdFGc8NWCovUMgAt7brH8Be9ERYpnQGOpEHsWRDIkB-16HDvLw1HVdvcqKns9z3P1jvgOskcy1P9B450EFy-HFPl21SXr70xa-XIZFrRdv4Tap7UXbzlFwDHfmwus4MxjNjIuBWbkJJQ8oPFUBlfqk_GQLiiKxvr-Ve5rAh3ClVlTrxGIF1E9bPWHbOvHH09fe2sNjP9BDoGiovFRSmWepXk4oWQa5ecf77ywXpW4k"
  },
  {
    id: 11,
    title: "Growth & Digital Marketing",
    description: "Master SEO, performance marketing, and growth hacking strategies for modern tech products.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2M5Cu1j77MSmIpXH6V5IaGYuIfvx2yZAj_PX4dZi6uja5o_On-oS27K2GpnelewobsD0glZYgK5oqj1tHe0QlSeSC-Ca5BedfCU7PzGKdlR-kl0v63Lj37B0gDW2CdedFx1lmwiwYzmRzSTcmIjLSrj9anQaDD9s6sFm1_Zkns9csgk_y4TEiGSCa14HIMHIAPwoOqXbWwwHPsx_xgSv0ebIfK3aPvQOT_IipHD9FR_x5qiqqmQlMX-5jmZK4hhJ6uKmFfAvRb1M"
  },
  {
    id: 12,
    title: "Prompt Engineering Mastery",
    description: "Learn advanced prompt design and optimization techniques to get the most out of LLMs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZLWfNPWHmiFNt5MT54xAV2qpYqSXSvcQzDbLxEb-bqOX5CYwvNiygF1AH0uZcPUu0Yp9xWnNZ8xDTHqMpXGpBkczkmkUBSXOfKXPwLJBgz5RFg-QeM93rFcLU7gNsKloItM3AyhvznZt2e8iNI2-BYX1LAok632eGzEldogInqr71dj0LqFf5cvHlfuEsRW_e4w3Sj0yhbhNLVmLWXOjmD-zbCBxpJke365RI4GQ9gp3pUmwCTLNVA36Qtu--qBskxs-mlZgiBA8"
  }
];

export default function CoursesGridSection({ search }) {
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-4">Elite Learning Paths</h2>
          <p className="font-body text-on-surface-variant text-xl">Curated paths for high-growth tech careers.</p>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined text-5xl mb-4 opacity-50">search_off</span>
            <p className="text-xl">No courses found matching "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className={`relative group rounded-2xl overflow-hidden bg-surface-container border p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(192,193,255,0.02)] hover:shadow-[0_0_40px_rgba(192,193,255,0.15)] transition-all duration-500 hover:-translate-y-2 ${course.featured ? `border-${course.color}/30 lg:scale-105 z-10 bg-gradient-to-b from-surface-container to-surface-container-high shadow-[0_0_40px_rgba(var(--color-${course.color}),0.1)]` : 'border-outline-variant/20 hover:border-primary/50'
                  }`}
              >
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
                  <img alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={course.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
                  {course.badge && (
                    <div className={`absolute top-4 left-4 bg-${course.color}/20 backdrop-blur-md border border-${course.color}/50 text-${course.color} px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(var(--color-${course.color}),0.3)]`}>
                      {course.badge}
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline text-xl lg:text-2xl font-bold text-on-surface mb-3">{course.title}</h3>
                  <p className="font-body text-on-surface-variant text-sm lg:text-base mb-6">{course.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/10">
                  <div className={`font-headline font-bold text-xl lg:text-2xl ${course.featured ? `text-${course.color}` : 'text-on-surface'}`}>
                    ₹2499
                  </div>
                  {course.featured ? (
                    <Link to="/register">
                      <button className={`bg-${course.color}/10 hover:bg-${course.color}/20 font-headline font-bold text-${course.color} px-5 py-2.5 rounded-full flex items-center gap-2 transition-all group-hover:shadow-[0_0_20px_rgba(var(--color-${course.color}),0.3)] border border-${course.color}/30`}>
                        Explore <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </button>
                    </Link>
                  ) : (
                    <Link to="/register">
                      <button className="font-headline font-bold text-primary hover:text-primary-container flex items-center gap-2 transition-colors">
                        Explore <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
