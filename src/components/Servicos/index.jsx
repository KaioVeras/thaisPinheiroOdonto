import { ServicosContainer, ContainerCards } from './styles';

import { Stars, BriefcaseMedical, ShieldPlus, HeartPulse } from 'lucide-react';
import { TbDentalBroken, TbDental } from "react-icons/tb";

function Servicos() {
    return (
        <ServicosContainer>
            <h1>Nossos Serviços</h1>
            <p className='descricao'>Oferecemos um cuidado completo para a sua saúde bucal, com foco em tratamentos eficazes e bem-estar.</p>

            <ContainerCards>
                <div className='card'>
                    <div className='icon'>
                        <BriefcaseMedical size={24} color="#4d9388" />
                    </div>
                    <h3>Clínica Geral</h3>
                    <p>Manutenção da saúde bucal e diagnóstico de problemas, garantindo um acompanhamento contínuo e tratamentos preventivos.</p>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <TbDental size={24} color="#4d9388" />
                    </div>
                    <h3>Dentística (Restaurações)</h3>
                    <p>Tratamentos que devolvem a forma, a resistência e a estética natural dos dentes, tratando cáries e fraturas.</p>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <ShieldPlus size={24} color="#4d9388" />
                    </div>
                    <h3>Periodontia (Limpeza)</h3>
                    <p>Remoção de placa bacteriana e tártaro, prevenindo problemas gengivais e mantendo a saúde dos tecidos que sustentam os seus dentes.</p>
                </div>


                <div className='card'>
                    <div className='icon'>
                        <HeartPulse size={24} color="#4d9388" />
                    </div>
                    <h3>Cirurgia</h3>
                    <p>Realização de extrações, remoção de sisos e outros procedimentos cirúrgicos com cuidado, precisão e todo o conforto necessário.</p>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <TbDentalBroken size={24} color="#4d9388" />
                    </div>
                    <h3>Endodontia (Canal)</h3>
                    <p>Alívio da dor e preservação do seu dente com tecnologia de ponta, de forma segura e confortável.</p>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <Stars size={24} color="#4d9388" />
                    </div>
                    <h3>Estética (Clareamento)</h3>
                    <p>Tratamentos para clareamento dental que visam melhorar a estética do seu sorriso de forma segura e eficaz.</p>
                </div>
            </ContainerCards>

            <button className='secondary-button-mobile'>
                <a href="https://wa.me/556135506324" target='_blank'>Precisa de um especialista? Fale conosco</a>
            </button>
        </ServicosContainer>
    );
}

export default Servicos;