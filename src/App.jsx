import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop'

//используем контекст (см. context) на уровне приложения
import { ContextProvider } from './context'

//в ContextProvider мы обернем shop. И shop будет являться тем самым children, а также все его дочерние элементы будут наследовать то, что есть в ContextProvider
function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}
//и теперь мы можем спустить что-то в любой дочерний элемент
//см.далее для BasketItem

export default App;
