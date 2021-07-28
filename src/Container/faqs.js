import React  from 'react';
import faqsData from '../fixtures/faqs.json'
import {Accordian, OptForm} from '../Componentes';

export function FaqsContainer(){
    return(
        <Accordian>
            <Accordian.Tttle>Frequently Asked Questions</Accordian.Tttle>
            {faqsData.map(item =>(
                <Accordian.Item key={item.id}>
                 <Accordian.Header> {item.header}</Accordian.Header>
                 <Accordian.Body> {item.body}</Accordian.Body>

                </Accordian.Item>
            ))}
            
            <Accordian.Item>
             <OptForm>
                 <OptForm.Input placeholder="Email address"/>
                 <OptForm.Button>Get Started</OptForm.Button>
                 <OptForm.Break/>
                 <OptForm.Text>
                     Ready to watch? Enter your email to create or restart your membership

                 </OptForm.Text>
             </OptForm>
            </Accordian.Item>
        </Accordian>
    )
}