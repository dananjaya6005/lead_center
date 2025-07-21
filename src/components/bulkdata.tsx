// @ts-nocheck
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



  const data =[
    { "name": "R.B. C. AMILA", "phone_number": "717925995" },
    { "name": "Nethmina", "phone_number": "714707092" },
    { "name": "INDIKA FERNANDO", "phone_number": "94771196453" },
    { "name": "Chathura", "phone_number": "94717439180" },
    { "name": "shashika", "phone_number": "94742166350" },
    { "name": "Namal samarasekara", "phone_number": "94774694725" },
    { "name": "ad.saman kumara", "phone_number": "94715787094" },
    { "name": "isuru", "phone_number": "94711669081" },
    { "name": "Buddhi Gayanthika Amarasinghe", "phone_number": "94713757345" }
  ]
  
  
  
  
  
  
  
  

  export default function BulkData() {

    const agentUsernames = [
"ruwan124",
"maduranga23",
"rishantha3",
"maduka4"
    ];

    const generateRandomLeadID = () => {
        return Math.floor(Math.random() * 1e15).toString().padStart(15, '0');
      }
      
      const insertDataWithDelay = async (data) => {
        for (let i = 0; i < data.length; i++) {
          const { name, phone_number } = data[i];
          const fullName = name;
          const phone = phone_number;
          const email = '';
          const userName = 'manjula1';
          const leadID = generateRandomLeadID();
          const project = 'May - 2025 - Diaspora - Katana';
          const supivisor_userName = 'lahirusup1';
          const top_level_userName = 'siripelalandsceo1';
          const organization_name = 'Siripela Lands';
          const pageID = '101142375149622'; 
          const formID = '2749217621936408';
          const lead_origin = 'whatsapp'
      
          const { error } = await supabase
            .from('leads') // Replace with your table name
            .insert([{
              fullName,
              email,
              phone,
              userName,
              leadID,
              project,
              supivisor_userName,
              top_level_userName,
              organization_name,
              pageID,
              lead_origin,
              
            formID
            }]);
      
          if (error) {
            console.error('Error inserting data:', error);
          } else {
            console.log(`Inserted row ${i + 1}:`, { fullName, email, phone, userName, leadID, project, supivisor_userName, top_level_userName, organization_name });
          }
      
          // Wait for 500ms before inserting the next row
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      };


      const insertDummyTestLeadsForAgents = async (agentList) => {
        for (let i = 0; i < agentList.length; i++) {
          const userName = agentList[i];
          const fullName = `Test Lead for ${userName}`;
          const phone = "0332228228";
          const email = '';
          const leadID = generateRandomLeadID();
          const project = 'Test - Dummy Project - 2025';
          const supivisor_userName = 'malshan14,afaaz15,madhushika16';
          const top_level_userName = 'pitch-capital-ceo';
          const organization_name = 'pitch capital';
          const pageID = '000000000001';
          const formID = '00000000000002';
          const lead_origin = '';
    
          const { error } = await supabase.from('leads').insert([{
            fullName,
            email,
            phone,
            userName,
            leadID,
            project,
            supivisor_userName,
            top_level_userName,
            organization_name,
            pageID,
            lead_origin,
            formID
          }]);
    
          if (error) {
            console.error(`Error inserting test lead for ${userName}:`, error);
          } else {
            console.log(`Inserted test lead for ${userName}`);
          }
    
          await new Promise(resolve => setTimeout(resolve, 300)); // Slight delay to avoid rate limits
        }
      };


      async function updateusername (){
        const { data, error } = await supabase
  .from('leads')
  .update({ supivisor_userName: 'union-assurance-sup' })
  .eq('supivisor_userName', 'lalith23')
  .eq('organization_name',  'union assurance')


if (error) {
  console.error('Update failed:', error);
} else {
  console.log('Update successful:', data);
}

      }


      const distributeLeadsAmongAgents = async () => {
        const chunkSize = Math.ceil(data.length / agentUsernames.length);
        let leadIndex = 0;
    
        for (let i = 0; i < agentUsernames.length; i++) {
          const chunk = data.slice(leadIndex, leadIndex + chunkSize);
          const userName = agentUsernames[i];
    
          for (let j = 0; j < chunk.length; j++) {
            const { name, phone_number } = chunk[j];
            const fullName = name;
            const phone = phone_number;
            const email = '';
            const leadID = generateRandomLeadID();
            const project = 'Jul - 2025 - Poruwadanda';
            const supivisor_userName = 'rishantha-sup';
            const top_level_userName = 'rashmi-ceo';
            const organization_name = 'Dedigama Property';
            const pageID = '213717618707891';
            const formID = '652077404514754';
            const lead_origin = '';
    
            const { error } = await supabase.from('leads').insert([{
              fullName,
              email,
              phone,
              userName,
              leadID,
              project,
              supivisor_userName,
              top_level_userName,
              organization_name,
              pageID,
              lead_origin,
              formID
            }]);
    
            if (error) {
              console.error(`Error inserting for ${userName}:`, error);
            } else {
              console.log(`Inserted for ${userName}: ${fullName}`);
            }
    
            await new Promise(resolve => setTimeout(resolve, 300));
          }
    
          leadIndex += chunkSize;
        }
      };
    
      return(
        <div>
          <Button onClick={() => insertDataWithDelay(data)}>Insert Bulk  Data</Button>
          <Button type="dashed" onClick={() => insertDummyTestLeadsForAgents(agentUsernames)}>
        Insert Dummy Test Leads for Agents
      </Button>
      <Button onClick={()=>{updateusername()}}>change user name </Button>
          <Button type="primary" onClick={() => distributeLeadsAmongAgents()}>
            Distribute Leads Among Agents
          </Button>
        </div>
      )

  }

