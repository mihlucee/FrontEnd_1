import { PlayCircle } from 'lucide-react';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container><Logo /></Container>
      
      <Container><Menu /></Container>
      
      <Container><CountDown /></Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='task'
              labelText='Qual seu foco agora?'
              placeholder='Ex: Estudar React'
            />
          </div>

          <div className='formRow'>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.4rem' }}>
              Mantenha o foco por 25 minutos.
            </p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            {/* Botão de Iniciar Único */}
            <DefaultButton icon={<PlayCircle />} />
          </div>
        </form>
      </Container>

      {/* Rodapé Finalizando o Layout */}
      <Container>
        <Footer />
      </Container>
    </>
  );
}