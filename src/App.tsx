//@ts-nocheck
import React, { useState ,useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import bgimg from './assets/bgimg.jpg';
import mysvg from './assets/mysvg.svg';
import BulkData from './components/bulkdata';


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
         alert('error occured');
        return;
      }else
      {
        console.log("respose after data insert",data);
        success();
     
      if(data == null) {
        console.log('data storeed successfully and recieved null'); 
        // setSelectedOrg('');
        // setSelectedProject([{}]);
        setTimeout(()=>{
          setFullName('');
          setPhone('');
          setEmail('');
        },100)
      }

        
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


    <div className='flex flex-col bg-white m-40 p-28 rounded-3xl w-full bg-opacity-90 backdrop-blur-md max-[500px]:m-2 max-[600px]:p-4	'>
      <p className='text-5xl font-extrabold text-slate-700 text-center max-[600px]:text-4xl '>MYCRM.LK </p>
      <p className='text-xl font-semibold text-slate-500 text-center my-4 max-[600px]:text-lg' >Facebook Engagement Leads Generation Form</p>
      <div className='flex flex-col  justify-center items-center'>
    <Select
    className='my-4 w-[50%] max-[600px]:w-full'
     placeholder="Select an organization"
      // style={{ width: window.innerWidth < 500 ? '100%' : '50%' }}
      onChange={(text)=> setSelectedOrg(text) }
      value={selectedOrg}
      options={[
      // { label: 'DMS', value: 'DMS' },
      // { label: 'Golden gate', value: 'Golden gate'},
      // { label : 'RIMS' , value : 'RIMS'},
      // { label: 'Parkproperties', value: 'Parkproperties' },
      // { label: 'Royal Oak Holding', value: 'Royal Oak Holding'},
      // { label: 'Royal Oak Residencies', value: 'Royal Oak Residencies' },
      { label: 'EmpirePropeties', value: 'EmpirePropeties' },
      // { label: 'Empirelands', value: 'Empirelands' },
      // { label: 'Jayarealestate', value: 'Jayarealestate' },
      // { label: 'Sahana Idam', value: 'Sahana Idam' },
      { label: 'Sunico', value: 'Sunico' },
      { label: 'City Lands', value: 'City Lands' },
      { label: 'Nexis College', value: 'Nexis College' },
      { label: 'Siripela', value: 'Siripela' },
      { label: 'Winrich International', value: 'Winrich International' },
      { label: 'Siripela Homes & Construction', value: 'Siripela Homes & Construction' },
      { label : 'Victoria Property' , value : 'Victoria Property'},
 
      { label : 'Devthuru Furnitures' , value : 'Devthuru Furnitures'},
      { label : 'Leo Holdings' , value : 'Leo Holdings'},
      { label : 'EPR' , value : 'EPR'},
      { label : 'union assurance' , value : 'union assurance'},
      { label : 'Dedigama Property' , value : 'Dedigama Property'},
      { label : 'iRoof' , value : 'iRoof'},
      { label : 'pitch capital' , value : 'pitch capital'},
     
      

      ]}
    />

        <Select
           value={selectedProject}
            className='my-4 w-[50%] max-[600px]:w-full'
              placeholder="Select a project"
              onChange={(text)=> setSelectedProject(text) }
              options={projectForOrg}
        />

        <Input value={fullName} onChange={(e)=> setFullName(e.target.value)} className='w-[50%] my-4 max-[600px]:w-full ' placeholder="Customer Name" />
        <Input value={phone} onChange={(e)=> setPhone(e.target.value)} className='w-[50%] my-4 max-[600px]:w-full ' placeholder="Customer Phone" />
        <Input value={email} onChange={(e)=> setEmail(e.target.value)} className='w-[50%] my-4 max-[600px]:w-full' placeholder="Customer Email" />

        <Button  disabled={phone.length == 0 ? true : false} onClick={insertData} type="primary">Submit</Button>

        {contextHolder}

    </div>
   
    </div>
    </div>
    {/* <RenameSuperviosr/>
    <BulkData/> */}
    </>
  );
};

export default App;