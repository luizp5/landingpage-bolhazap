
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

// Branding dinâmico restaurado

const LandingCTA = () => {
  const { companyName } = useBrandingConfig();
  const resolvedName = (companyName && companyName.trim().length > 0) ? companyName : (import.meta.env.VITE_COMPANY_NAME || 'Poupe Já');

  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-20 w-full">
      <div className="w-full px-4">
        <motion.div
          className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 rounded-3xl p-12 md:p-16 text-center text-white max-w-6xl mx-auto shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Veja, Planeje e Domine o Seu Dinheiro.
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed">
          Transforme sua relação com o dinheiro hoje mesmo. Com o <span className="text-white font-bold bg-green-500/20 px-2 py-1 rounded-lg border border-green-400/30">{resolvedName}</span>, você conquista controle total das suas finanças de forma simples e inteligente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-6 font-semibold w-64 sm:w-auto mx-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white text-green-700 hover:bg-gray-50 border-0 text-center"
              onClick={scrollToPlans}
            >
              <span className="md:hidden">Quero controle financeiro</span>
              <span className="hidden md:inline">Quero ter controle das minhas finanças</span>
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-90">
            ✔️ Simples <span className="mx-2">•</span> ✔️ Prático <span className="mx-2">•</span> ✔️ 100% no WhatsApp
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingCTA;
