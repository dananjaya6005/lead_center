import React, { useState ,useEffect, useMemo } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import bgimg from './assets/bgimg.jpg';
import mysvg from './assets/mysvg.svg';

import { Select } from 'antd';

const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')

const App: React.FC = () => {


  const [messageApi, contextHolder] = message.useMessage();



  const [data, setData] = useState<any>([]);
  const [selectedOrg, setSelectedOrg] = useState<string>('');
  const [projectForOrg, setProjectForOrg] = useState<any>([{}]);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');



  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Lead added successfully',
    });
  };




  const fetchData = async () => {
    const { data, error } = await supabase
      .from('forManualLeadAssigment')
      .select('*').eq('organization_name', selectedOrg)
    setData(data);
  console.log(data[0].projects)
  setProjectForOrg(data[0].projects);

  if (error) {
    console.error(error);
    return;
  }


  const transformedProjects = data[0].projects.map((project: any) => ({
    label: project,
    value: project
  }));

  setProjectForOrg(transformedProjects);

   
  }

 useMemo(() => {
    fetchData();
  }, [selectedOrg]);


  async function insertData() {

    const { data, error } = await supabase
      .from('leads')
      .insert({
        leadID : Math.floor(Math.random() * 10000000000),
        organization_name: selectedOrg,
        project : selectedProject,
        lead_origin : 'facebook_engagment',
        fullName : fullName,
        phone : phone,
        email : email

      });

      if (error) {
        console.error(error);
        return;
      }else
      {
        success();


         setTimeout(()=>{
          window.location.reload();
         }, 2000)

      

        
      }
  }







  return (
    <>
    
    <div 

    style={{

      backgroundImage: `url(${mysvg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'

    }}
    
    className='flex justify-center  items-center h-screen'>


    <div className='flex flex-col bg-white m-40 p-28 rounded-3xl w-full bg-opacity-90 backdrop-blur-md	'>
      <p className='text-5xl font-extrabold text-slate-700 text-center'>MYCRM.LK </p>
      <p className='text-xl font-semibold text-slate-500 text-center my-4' >Facebook Engagement Leads Generation Form</p>
      <div className='flex flex-col  justify-center items-center'>
    <Select
    className='my-4'
     placeholder="Select an organization"
      style={{ width: '50%' }}
      onChange={(text)=> setSelectedOrg(text) }
      options={[
      { label: 'DMS', value: 'DMS' },
      { label: 'GoldenGate', value: 'GoldenGate' },
      { label: 'Guardian', value: 'Guardian' },
      { label: 'Parkproperties', value: 'Parkproperties' },
      { label: 'Royaloakholding', value: 'Royaloakholding' },
      { label: 'RoyaloakResidencies', value: 'RoyaloakResidencies' },
      { label: 'EmpirePropeties', value: 'EmpirePropeties' },
      { label: 'Empirelands', value: 'Empirelands' },
      { label: 'Leoholdingslanka', value: 'Leoholdingslanka' },
      { label: 'Jayarealestate', value: 'Jayarealestate' },
      { label: 'Groundworth', value: 'Groundworth' }, 
      { label: 'Sahana Idam', value: 'Sahana Idam' },
      { label: 'JMJ', value: 'JMJ' },
      { label: 'Sunico', value: 'Sunico' },
      { label: 'Academic Gateways', value: 'Academic Gateways' },
      { label: 'Prestige', value: 'Prestige' },
      { label: 'SAN Properties', value: 'SAN Properties' },
      { label: 'City Lands', value: 'City Lands' },
      { label: 'Holiday R and C', value: 'Holiday R and C' },
      { label: 'Nexis College', value: 'Nexis College' },
      { label: 'Shadama lands pvt ltd', value: 'Shadama lands pvt ltd' },
      ]}
    />

        <Select
            className='my-4'
              placeholder="Select a project"
              style={{ width: '50%' }}
              onChange={(text)=> setSelectedProject(text) }
              options={projectForOrg}
            />

        <Input onChange={(e)=> setFullName(e.target.value)} className='w-[50%] my-4' placeholder="Customer Name" />
        <Input onChange={(e)=> setPhone(e.target.value)} className='w-[50%] my-4' placeholder="Customer Phone" />
        <Input onChange={(e)=> setEmail(e.target.value)} className='w-[50%] my-4' placeholder="Customer Email" />

        <Button  disabled={phone.length == 0 ? true : false} onClick={insertData} type="primary">Submit</Button>

        {contextHolder}

    </div>
   
    </div>
    </div>
    </>
  );
};

export default App;