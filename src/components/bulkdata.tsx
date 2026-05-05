
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



const data =
[
  { "name": "Pasindu Dayan", "phone_number": "+94773530155" },
  { "name": "Omar Mohammed", "phone_number": "+94777842200" },
  { "name": "Rajitha", "phone_number": "+64225353311" },
  { "name": "Murugnathan Gobeenath", "phone_number": "+94776296895" }
]



export default function BulkData() {

  const agentUsernames = [

    "pasindu789",
    "ishara456",
    "harith231"
  ];

  const generateRandomLeadID = () => {
    return Math.floor(Math.random() * 1e15).toString().padStart(15, '0');
  }

  const insertDataWithDelay = async (data) => {
    for (let i = 0; i < data.length; i++) {
      const { email_address, name, phone_number } = data[i];
      const fullName = name;
      const phone = phone_number;
      const email = email_address;
      const userName = 'maduka4';
      const leadID = generateRandomLeadID();
      const project = 'Apr - 2026 - Madurawala';
      const supivisor_userName = 'rishantha-sup';
      const top_level_userName = 'navindu23';
      const organization_name = 'Dedigama Property';
      const pageID = '213717618707891';
      const formID = '971833808612475';
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
      const supivisor_userName = 'charitha91,sonali36';
      const top_level_userName = 'navindu23';
      const organization_name = 'Avroma and Ariyawansa Jewellers';
      const pageID = '000000000001111';
      const formID = '00000000000003333';
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
        const { name, phone_number, email_address: chunkEmail } = chunk[j];
        const fullName = name;
        const phone = phone_number;
        const email = chunkEmail;

        const project = 'May - 2026 - Campaign 1';
        const supivisor_userName = 'supervisor_ur';
        const top_level_userName = 'asanka_md1';
        const organization_name = 'Universal Residencies';
        const pageID = '1422844594399608';
        const formID = '1668663757800471';
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
          formID,
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
      .update({ userName: 'kanishka01', created_at: new Date().toISOString() })
      .eq('userName', 'dulinda56')
      .eq('organization_name', 'Siripela Homes & Construction')
      .eq('viewed', false)
      .limit(10);

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

