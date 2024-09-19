import './faqs.scss';

import Faq from './Faq'; 

export default function Faqs() {

  const faqs = [
    {num: 1, q: "What do you do?", a: "I lead an autonomous remote team focused on support Bible initiatives around the globe. We currently support over 70 locations and are growing annually. We provide these locations with training, resources, connections and vision to see their nation transformed by God's Word."},
    {num: 2, q: "Why do you need support?", a: "I need support because our mission work is entirely self-funded and donations allow me to focus on serving others. Your support covers essential living costs (food, rent) and mission-related expenses (travel, taxes)."},
    {num: 3, q: "What is the minimum donation?", a: "There is no minimum! Every bit helps, from covering daily expenses to larger needs. A $30 gift may not cover a plane-ticket, but it would cover a checked bag! Your generosity, no matter the size, allows us to continue to serve others around the globe."},
    {num: 4, q: "How can I donate?", a: "You can donate in various ways. Visit our donation section for all the options."},
    {num: 5, q: "Is my donation tax-deductible?", a: "It depends how you give. Tax-laws require tax-deductible gifts to go through a non-profit organization. If you give through our organization, you will receive a tax-deductible receipt at the end of the year. If you give in the other ways above, you donation will not be considered tax-deductible."},
    {num: 6, q: "How often do you need support?", a: "We rely on support for all of our expenses. This means having regular, monthly support allows us to manage regular, monthly expenses. However, we often have special needs arise throughout the year, and will do special campaigns each year to cover these needs."},
    {num: 7, q: "How can I stay updated?", a: "We send out quarterly newsletters by email. If you would like to receive these emails, you can fill out the Contact Form below and we can add you!"},
    {num: 8, q: "What difference does my donation make?", a: "Your donation allows us to fulfill the daily work of supporting our global locations. This means providing them with the information, connections and resources they need to end Bible poverty in their nation. In the past year, just one of the locations we support has donated a Bible to over 30,000 homes. Your donation transforms lives and helps end Bible poverty worldwide."},
    {num: 9, q: "What is your long-term goal?", a: "Our vision is three-fold: 1. To see the Bible made accessible in every language. This means the Bible is translated in a way that connects with the people and in a format that they can understand. 2. To see the Bible made available to every people. This means the Bible is published in a format they can use and in a way that they can afford. 3. To see the Bible abundant in every country. This means that the Bible has become a normal part of society, as well as having Bible resources for deeper engagement and transformation."}
  ]
  return (
    <article id='faqs' className='faqs'>
      <h2>Common Curiosities</h2>
      <h3>or Frequently Asked Questions</h3>
      {faqs.map(faq => <Faq props={faq} key={faq.num} />)}
    </article>
  )
}