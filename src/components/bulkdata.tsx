
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



const data =
[
  {
    "full_name": "Udeshan Madushanka",
    "phone_number": "+94714970131",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "Any time"
  },
  {
    "full_name": "Suneth Jeewantha",
    "phone_number": "+94770744107",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "Anytime"
  },
  {
    "full_name": "Shameer Niyas",
    "phone_number": "+94712551377",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "10am"
  },
  {
    "full_name": "W Ranasinghe",
    "phone_number": "+94777677765",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "පෙරවරු 9-12"
  },
  {
    "full_name": "Pradeep",
    "phone_number": "+94771033673",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "12 p m"
  },
  {
    "full_name": "Dileepa Indunil Dharmarathna",
    "phone_number": "+94778310331",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "Monday morning"
  },
  {
    "full_name": "George De S. Wijeratne",
    "phone_number": "+94773080981",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "11 am"
  },
  {
    "full_name": "Namal Jayaweera",
    "phone_number": "+94750954280",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "Any time"
  },
  {
    "full_name": "Niroshan Esala Siriwardane",
    "phone_number": "+94772099306",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "8:30-9Am"
  },
  {
    "full_name": "Isuru chamara",
    "phone_number": "+94715665236",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "monday"
  },
  {
    "full_name": "Anu Zoysa",
    "phone_number": "+94719751515",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "6pm"
  },
  {
    "full_name": "Roshen Nirmal fernando",
    "phone_number": "+94760493160",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "Tomorrow morning"
  },
  {
    "full_name": "Givantha Athapaththu",
    "phone_number": "+94766265641",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "මධ්‍යාහ්න 2-5"
  },
  {
    "full_name": "dulanja",
    "phone_number": "+94774163601",
    "email": "",
    "ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වෙලාව_සඳහන්_කරන්න": "any time"
  }
]

const customData = [

  {
    "full_name": "ecosy lanka",
    "phone_number": "+94763843849",
    "email": "ecosylanka@gmail.com",
    "products_category": "others",
    "number_of_parcels_per_month": "60",
    "company_name": "ecosy lanka"
  },
  {
    "full_name": "dissanayaka hardware and agro",
    "phone_number": "+94771926253",
    "email": "maleeshasankalpa012@gmail.com",
    "products_category": "others",
    "number_of_parcels_per_month": "100",
    "company_name": "dissanayaka hardware and agro"
  },
  {
    "full_name": "rajawalla multi center",
    "phone_number": "+94773307079",
    "email": "rathnayaker44@gmail.com",
    "products_category": "household_goods",
    "number_of_parcels_per_month": "200",
    "company_name": "rajawalla multi center"
  },
  {
    "full_name": "onema eka.lk",
    "phone_number": "+94707489123",
    "email": "Onemaeka.lk@gmail.com",
    "products_category": "household_goods",
    "number_of_parcels_per_month": "Oct-50",
    "company_name": "onema eka.lk"
  }

]



export default function BulkData() {

  const agentUsernames = [

  "maduranga23"
  ];

  const customAgentUsernames = [
    "thushara67",
    "cetaka54",
    "sachintha34",
    "shani65"

  ];

  const generateRandomLeadID = () => {
    return Math.floor(Math.random() * 1e15).toString().padStart(15, '0');
  }

  const insertDataWithDelay = async (data) => {
    for (let i = 0; i < data.length; i++) {
      const { email_address, full_name, phone_number } = data[i];
      const fullName = full_name;
      const phone = phone_number;
      const email = email_address;
      const userName = 'nimal46';
      const leadID = generateRandomLeadID();
      const project = 'Finaxis Real Estate | Jul - 2026 - Katunayake';
      const supivisor_userName = 'finaxissup';
      const top_level_userName = 'finaxisceo';
      const organization_name = 'Finaxis Real Estate';
      const pageID = '1197309586800148';
      const formID = '1042557121754896';
      const lead_origin = '';

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

  const insertCustomDataWithDelay = async (dataList: any[]) => {
    for (let i = 0; i < dataList.length; i++) {
      const item = dataList[i];
      const fullName = item.full_name || '';
      const phone = item.phone_number || item.whatsapp_number || '';
      const email = item.email 
      // || item['which_vehicle_model_are_you_looking_for?'] || '';
      const city = item.city || '';
      
      // Extract other fields to put in custom_fields while excluding the already mapped city field
      const { full_name, phone_number, email: _, city: _city, ...rest } = item;
      const custom_fields = rest;

      const userName = customAgentUsernames[i % customAgentUsernames.length];
      const leadID = generateRandomLeadID();
      const project = 'Island Xpress | Oct - 2026 - 2';
      const supivisor_userName = 'sanjeewa42,andy57,rashmi-ie34';
      const top_level_userName = 'islandxpressceo';
      const organization_name = 'Island Xpress';
      const pageID = '1107815012420366';
      const formID = '1123110250468727';
      const lead_origin = '';

      const { error } = await supabase
        .from('leads')
        .insert([{
          fullName,
          email,
          phone,
          city,
          userName,
          leadID,
          project,
          supivisor_userName,
          top_level_userName,
          organization_name,
          pageID,
          lead_origin,
          formID,
          custom_fields
        }]);

      if (error) {
        console.error('Error inserting custom data:', error);
      } else {
        console.log(`Inserted custom row ${i + 1}:`, { fullName, email, phone, custom_fields });
      }

      // Wait for 500ms before inserting the next row
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };


  const insertDummyTestLeadsForAgents = async (agentList) => {
    for (let i = 0; i < agentList.length; i++) {
      const userName = agentList[i];
      const fullName = `Test Lead for ${userName}`;
      const phone = "0706288293";
      const email = '';
      const leadID = generateRandomLeadID();
      const project = 'Jul - 2026 - Finaxis Real Estate';
      const supivisor_userName = 'finaxissup';
      const top_level_userName = 'finaxisceo';
      const organization_name = 'Finaxis Real Estate';
      const pageID = '1197309586800148';
      const formID = '45436656346455456';
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


  async function updateusername() {
    const { data, error } = await supabase
      .from('leads')
      .update({ userName: 'kanishka01' })
      .eq('userName', 'dulinda56')
      .eq('organization_name', 'Siripela Homes & Construction')


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
        const lead = chunk[j];
        const fullName = lead.full_name || lead.name || '';
        const phone = lead.phone_number || lead.phone || lead.whatsapp_number || '';
        const email = lead.email || lead.email_address || '';
        const city = lead.city || lead.ඔබව_සම්බන්ධ_කරගැනීමට_පහසු_වේලාවක්_අප_වෙත_ලබා_දෙන්න || '';
        const country = lead.country || ''; 

        const project = 'Apr - 2026 - Poruwadanda';
        const supivisor_userName = 'rishantha-sup';
        const top_level_userName = 'rashmi-ceo';
        const organization_name = 'Dedigama Property';
        const pageID = '213717618707891';
        const formID = '3476665809154995';
        const lead_origin = '';
        const leadID = generateRandomLeadID();

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
          formID,
          city,
          country,
          created_at: new Date(Date.now() - Math.random() * (7 * 60 * 60 * 1000)).toISOString(),
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


  async function fetchLeadsTestforReport() {

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
        // const phone = `07${Math.floor(100000000 + Math.random() * 900000000)}`;
        const phone = `0706288293`;
        const email = `dummy${i}@example.com`;
        const userName = "dinesh_1";
        const leadID = generateRandomLeadID();
        const project = "May - 2026 - Test Dummy Project";
        const supivisor_userName = "nishi62";
        const top_level_userName = "thushara47";
        const organization_name = "Aroma Flare Academy";
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
            status: 'initiated_process',
            lead_origin,
            formID,
            //make yesrerday date
            // created_at: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
            // next_following_up_date : new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
            viewed: true,
            is_following_up: true
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


  async function updateSomeinfo() {
    const { data, error } = await supabase
      .from('leads')
      .update({ userName: 'dinesh-raj_345'} )
      .eq('formID', '1514721063649293')
      .eq('organization_name', 'EmpirePropeties')
      
      

    if (error) {
      console.error('Update failed:', error);
    } else {
      console.log('Update successful:', data);
    }

  }


  async function updateUspervisorandOrg() {
    const { data, error } = await supabase
      .from('leads')
      .update({ supivisor_userName: 'rajitha01,yasitha02,praveen03,lakmal04,udani05,lakshani06', organization_name: 'NS Residencies', top_level_userName: 'sudath01', userName: 'praveen056' })
      .eq('formID', '2022599621625590')
    if (error) {
      console.error('Update failed:', error);
    } else {
      console.log('Update successful:', data);
    }
  }


  async function updateProjectNameEqtoFormID() {
    const { data, error } = await supabase
      .from('leads')
      .update({ project: 'Properties.lk | Jan - 2026 - Local' })
      .eq('formID', '1787405951920156')
      .eq('organization_name', 'Leo Holdings')

    if (error) {
      console.error('Update failed:', error);
    } else {
      console.log('Update successful:', data);
    }
  }



  async function updateSomeinfowithlimit() {
    // Supabase update() does not support limit() directly.
    // We must fetch the IDs first to limit the number of rows.
    const { data: leadsToUpdate, error: fetchError } = await supabase
      .from('leads')
      .select('id')
      .eq('userName', 'ruwan_878')
      .eq('project', 'Nov - 2025 - Boralesgamuwa')
      .eq('organization_name', 'EmpirePropeties')
      .eq('viewed', false)
      .order('created_at', { ascending: false })
      .limit(90);

    if (fetchError) {
      console.error('Error fetching leads to update:', fetchError);
      return;
    }

    if (!leadsToUpdate || leadsToUpdate.length === 0) {
      console.log('No leads found to update');
      return;
    }

    const idsToUpdate = leadsToUpdate.map(lead => lead.id);

    const { data, error } = await supabase
      .from('leads')
      .update({ userName: 'ishani33', created_at: new Date().toISOString() })
      .in('id', idsToUpdate)
      .select();

    if (error) {
      console.error('Update failed:', error);
    } else {
      console.log('Update successful:', data);
    }
  }

  return (
    <div>
      <Button onClick={() => insertDataWithDelay(data)}>Insert Bulk  Data</Button>
      <Button 
        style={{ backgroundColor: '#722ed1', color: '#fff', borderColor: '#722ed1' }} 
        onClick={() => insertCustomDataWithDelay(customData)}
      >
        Insert Custom Data with Delay
      </Button>
      <Button type="dashed" onClick={() => insertDummyTestLeadsForAgents(agentUsernames)}>
        Insert Dummy Test Leads for Agents
      </Button>
      <Button onClick={() => { updateusername() }}>change user name </Button>
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

      <Button onClick={() => updateSomeinfowithlimit()} type="dashed">
        Update Some Info with limit
      </Button>

      <Button onClick={() => updateProjectNameEqtoFormID()} type="dashed">
        Update Project Name Eq to Form ID
      </Button>

      <Button onClick={() => updateUspervisorandOrg()} type="dashed">
        Update Uspervisor and Org
      </Button>


    </div>
  )

}

