import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Introduction from '@/components/organisms/Introduction';
import Clients from '@/components/organisms/Clients';
import Newsletter from '@/components/organisms/Newsletter';

interface IHomeTemplate {
    isLogged: boolean
}

const HomeTemplate = ({ isLogged }: IHomeTemplate) => {
    return (
        <>
            <Header isLogged={isLogged} />
            <main
                className="mt-stack-xxl flex flex-col gap-stack-xxl pt-stack-xxs pb-stack-xxl
                          lg:pt-stack-xxl
                          xl:pt-stack-xxxl xl:gap-24
                          2xl:pb-stack-xxxl"
            >
                <Introduction />
                <Clients />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
};

export default HomeTemplate;