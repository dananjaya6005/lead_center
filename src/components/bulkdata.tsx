
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



  const data =
[
  { "name": "Ariyawansa", "phone_number": "+947555448605", "email": "ariyawansaliyana​​ge@gmail.com" },
  { "name": "Uditha Suranga De Silva", "phone_number": "+947772229950", "email": "usdesilva@gmail.com" },
  { "name": "Lakshman Guruge de Silva", "phone_number": "+94714407135", "email": "lakshmanguruge2@gmail.com" },
  { "name": "Samantha Pitigala", "phone_number": "+94772210546", "email": "samanthaptitigala@gmail.com" },
  { "name": "Uraj Fernando", "phone_number": "+94773862808", "email": "rajith.fernand@gmail.com" },
  { "name": "Krishanthi Padmika", "phone_number": "+947724343885", "email": "krishanthipadmika@gmail.com" },
  { "name": "Madu", "phone_number": "+94766779038", "email": "madushirathnayaka70@gmail.com" },
  { "name": "Ajith Ranasinghe", "phone_number": "+947776607013", "email": "ranasinghea746@gmail.com" },
  { "name": "Samila Gangani Nawarathna", "phone_number": "+947680320666", "email": "samila.n@yahoo.com" },
  { "name": "W Sriyani Udayangani", "phone_number": "+94771895010", "email": "udayangani582@gmail.com" },
  { "name": "Veena Kaushalya", "phone_number": "+947772404997", "email": "vkaushi9@gmail.com" },
  { "name": "Dilani Hasintha", "phone_number": "+947724947722", "email": "dhvithana95@gmail.com" },
  { "name": "JK", "phone_number": "+947503401377", "email": "janitharanasinghe2@gmail.com" },
  { "name": "Kapila Ratnayake", "phone_number": "+947714948459", "email": "kapila140@gmail.com" },
  { "name": "Nethini Hirusha", "phone_number": "+947144662606", "email": "hirushanethni2277@gmail.com" },
  { "name": "Leelananada Jayasekara", "phone_number": "+947718776797", "email": "leelananada600@gmail.com" },
  { "name": "Jayathilaka Prathapage Upali", "phone_number": "+947188009823", "email": "ujprathapa@gmail.com" },
  { "name": "Sudarshana Karasinghe", "phone_number": "+947712568889", "email": "kasudarshana288@gmail.com" },
  { "name": "Nayana Madhumadawa", "phone_number": "+947885055210", "email": "nayanamadhumadawa@gmail.com" }
]



  

  export default function BulkData() {

    const agentUsernames = [

  "kumari01",
  "anusha45",
    ];

    const generateRandomLeadID = () => {
        return Math.floor(Math.random() * 1e15).toString().padStart(15, '0');
      }
      
      const insertDataWithDelay = async (data) => {
        for (let i = 0; i < data.length; i++) {
          const { name, phone_number  } = data[i];
          const fullName = name;
          const phone = phone_number;
          const email = '';
          const userName = 'ruwan_878';
          const leadID = generateRandomLeadID();
          const project = 'Nov - 2025 - Kottawa';
          const supivisor_userName = 'supervisor-epl-1,anusha-sup';
          const top_level_userName = 'empire-land-ceo_545';
          const organization_name = 'EmpirePropeties';
          const pageID = '104291372716334'; 
          const formID = '3064970577016617';
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
          const supivisor_userName = 'dasun_533';
          const top_level_userName = 'dms_owner_sudarshana_980';
          const organization_name = 'DMS';
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
  .update({ userName: 'kanishka01' })
  .eq('userName', 'dulinda56')
  .eq('organization_name',  'Siripela Homes & Construction')


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
            const { name, phone_number, email: chunkEmail } = chunk[j];
            const fullName = name;
            const phone = phone_number;
            const email = chunkEmail;
           
            const project = 'Nov - 2025 - Kottawa';
            const supivisor_userName = 'supervisor-epl-1,saranga-ep_11,kasuni-ep_12,anusha-sup';
            const top_level_userName = 'empire-land-ceo_545';
            const organization_name = 'EmpirePropeties';
            const pageID = '104291372716334';
            const formID = '3064970577016617';
            const lead_origin = '';
            const leadID = generateRandomLeadID();

            const { error } = await supabase.from('leads').insert([{
              fullName,
              email,
              phone,
              userName,
              // created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
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


       async function fetchLeadsTestforReport(){

        const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('organization_name', 'Siripela Homes & Construction')
        .eq('project', 'Sep - 2025 - Construction - Modified')
        .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching leads:', error);
        } else {
          console.log('Fetched leads:', data);
        }

       } 

       const insertCustomDummyLeads = async (count) => {
    try {
      for (let i = 1; i <= count; i++) {
        const fullName = `Dummy Lead ${i}`;
        const phone = `07${Math.floor(100000000 + Math.random() * 900000000)}`;
        const email = `dummy${i}@example.com`;
        const userName = "dinesh_1";
        const leadID = generateRandomLeadID();
        const project = "Oct - 2025 - Test Dummy Project";
        const supivisor_userName = "sup_dms1";
        const top_level_userName = "dms_owner_sudarshana_980";
        const organization_name = "DMS";
        const pageID = "999999999999999";
        const formID = "888888888888888";
        const lead_origin = "";

        const { error } = await supabase.from("leads").insert([
          {
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
            status : 'initiated_process',
            lead_origin,
            formID,
            //make yesrerday date
            // created_at: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
            // next_following_up_date : new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
            viewed :true,
            is_following_up : true
          },
        ]);

        if (error) {
          console.error(`❌ Error inserting dummy ${i}:`, error);
        } else {
          console.log(`✅ Inserted dummy lead ${i}:`, fullName);
        }

        await new Promise((resolve) => setTimeout(resolve, 300)); // Delay between inserts
      }

      console.log(`🎉 Successfully inserted ${count} dummy leads`);
    } catch (err) {
      console.error("Unexpected error inserting dummy leads:", err);
    }
  };


async function updateSomeinfo(){
    const { data, error } = await supabase
  .from('leads')
  .update({ userName: 'kanishka01', created_at: new Date().toISOString() })
  .eq('userName', 'dulinda56')
  .eq('organization_name',  'Siripela Homes & Construction')
  .eq('viewed', false)

  if(error){
    console.error('Update failed:', error);
  } else {
    console.log('Update successful:', data);
  }
  
  }
    
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
      <Button type="dashed" onClick={() => fetchLeadsTestforReport()}>
        Fetch Leads for Report
      </Button>

          <Button onClick={() => insertCustomDummyLeads(5)} type="primary">
        Insert 50 Dummy Leads
      </Button>

      <Button onClick={() => updateSomeinfo()} type="dashed">
        Update Some Info
      </Button>


        </div>
      )

  }

