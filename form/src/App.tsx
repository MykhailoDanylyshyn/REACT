import RegistrationForm from './components/RegistrationForm'
import Header from './components/Header'
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Header
          title="Реєстрація"
          subtitle="Святкова реєстрація на отримання різдвяних подарунків для організованих працівників, які уважно читають робочу розсилку."
        />
        <div className="separator" />
        <RegistrationForm />
      </div>
    </div>
  )
}