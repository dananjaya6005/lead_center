// @ts-nocheck
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



  const data =[
  {
    "name": "Madu Rajapaksha",
    "phone_number": "+94763140254"
  },
  {
    "name": "Amila Udara",
    "phone_number": "+94775818254"
  },
  {
    "name": "Melani Silva",
    "phone_number": "+94767604321"
  },
  {
    "name": "D.R.A.Dilrukshi",
    "phone_number": "+94770085977"
  },
  {
    "name": "Ashan Dananjaya Wijesooriya",
    "phone_number": "+94763660704"
  },
  {
    "name": "Buddika Madusanka",
    "phone_number": "+94715530553"
  },
  {
    "name": "Mahesh Fernando",
    "phone_number": "+94773552028"
  },
  {
    "name": "Rumini Lakshika",
    "phone_number": "+94770136977"
  },
  {
    "name": "Malki Mwm",
    "phone_number": "+94713657816"
  },
  {
    "name": "Rishmi De Silva",
    "phone_number": "+703056933"
  },
  {
    "name": "Malinga Madusanka",
    "phone_number": "+94762807592"
  },
  {
    "name": "Kosmodara",
    "phone_number": "+94719888982"
  },
  {
    "name": "Dulanjana dikshan",
    "phone_number": "+94752637802"
  },
  {
    "name": "Dhanushka Priyadarshana",
    "phone_number": "+94777779379"
  },
  {
    "name": "Laaya De Silva",
    "phone_number": "+94771973655"
  },
  {
    "name": "Yugantha Rathnaweera",
    "phone_number": "+94773373610"
  },
  {
    "name": "Kasun Chathuranga",
    "phone_number": "+94772621794"
  },
  {
    "name": "Dimuthu Hasantha",
    "phone_number": "+94714867139"
  },
  {
    "name": "Ishan theekshana",
    "phone_number": "+94778468631"
  },
  {
    "name": "Nadun Suriyaarachchi",
    "phone_number": "+94762288901"
  },
  {
    "name": "Chamith Sandaruwan Samarasekara",
    "phone_number": "+94758399298"
  }
]



  

  export default function BulkData() {

    const agentUsernames = [
"kushan01",
  "darshika02",
  "ayodhya03",
  "savithri04",
  "jayanthi05",
  "shanika06",
  "manoj07",
  "janaki08",
  "pubudu09",
  "ruwan10",
  "lakshitha11",
  "thusitha12",
  "nuwan13",
  "priya14",
  "sanjula15",
  "dileeja16"
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
          const userName = 'kumari01';
          const leadID = generateRandomLeadID();
          const project = 'Aug - 2025 - Thalagala - Verdant Garden';
          const supivisor_userName = 'supervisor-epl-1';
          const top_level_userName = 'empire-land-ceo_545';
          const organization_name = 'EmpirePropeties';
          const pageID = '104291372716334'; 
          const formID = '4017986835116755';
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
          const supivisor_userName = 'supervisor17';
          const top_level_userName = 'ceo18';
          const organization_name = 'Power Hands Plantations';
          const pageID = '00000000000111';
          const formID = '0000000000000222';
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
            const project = 'Aug - 2025 - 3X';
            const supivisor_userName = 'supervisor17';
            const top_level_userName = 'ceo18';
            const organization_name = 'Power Hands Plantations';
            const pageID = '756191974243060';
            const formID = '2811685982374230';
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

