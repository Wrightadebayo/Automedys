import EmergencyPage from "./EmergencyPage";
import Footer from "./Footer";
import Formpage from "./FormPage";
import LocationPage from "./LocationPage";
// import Text from './Text'


const Contact = () => {
  return (
    <div className='max-w-[1100px mx-auto]'>
    <Formpage />
    <LocationPage />
    <EmergencyPage/>
    {/* <Text/> */}
  <Footer />
  </div>
  );
};

export default Contact;

