import Navbar from '../components/shared/Navbar.jsx';
import RegistrationLeftSection from '../components/registration/RegistrationLeftSection.jsx';
import RegistrationFormSection from '../components/registration/RegistrationFormSection.jsx';
import Footer from '../components/shared/Footer.jsx';

export default function Register() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar activePage="register" />
      <main className="flex-grow">
        <section className="min-h-screen flex items-start justify-center px-6 lg:px-12 pt-28 pb-10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="space-y-6 max-w-xl lg:col-span-6">
              <RegistrationLeftSection />
            </div>
            <div className="w-full flex justify-end items-start lg:col-span-6">
              <div className="w-full">
                <RegistrationFormSection />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer activePage="register" />
    </div>
  );
}
