// @ts-nocheck
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



  const data =[
    { "name": "priyantha", "phone_number": "+94785110409" },
    { "name": "W.S.L.Withanage", "phone_number": "+94717276952" },
    { "name": "Janiru", "phone_number": "+94740670569" },
    { "name": "Lahiru Sandaruwan", "phone_number": "+94786622817" },
    { "name": "Darshan", "phone_number": "+94785788180" },
    { "name": "M G Tharanga Jayanath", "phone_number": "+94771454499" },
    { "name": "chandana", "phone_number": "+94766473521" },
    { "name": "Dilini Dissanayake", "phone_number": "+94711626397" },
    { "name": "Shani Ramanayaka", "phone_number": "+94712449090" }
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
          const userName = 'sanath_341';
          const leadID = generateRandomLeadID();
          const project = 'Aug - 2025 - Kurunegala - New';
          const supivisor_userName = 'leo-holdings-sup-101';
          const top_level_userName = 'leo-holding-ceo1';
          const organization_name = 'Leo Holdings';
          const pageID = '14250359314545073'; 
          const formID = '104291372556634';
          const lead_origin = ''
      
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
          const supivisor_userName = 'harsha_sv17';
          const top_level_userName = 'priyantha61';
          const organization_name = 'iRoof';
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
  .update({ userName: 'isuru45' })
  .eq('userName', 'Isuru45')
  .eq('organization_name',  'Leo Holdings')


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
            const project = 'Aug - 2025 - Poruwadanda';
            const supivisor_userName = 'rishantha-sup';
            const top_level_userName = 'rashmi-ceo';
            const organization_name = 'Dedigama Property';
            const pageID = '213717618707891';
            const formID = '808610854823015';
            const lead_origin = '';
    
            const { error } = await supabase.from('leads').insert([{
              fullName,
              email,
              phone,
              userName,
              created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
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

