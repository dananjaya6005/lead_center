// @ts-nocheck
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



  const data =[
    { "name": "Koshini", "phone_number": "971545719717" },
    { "name": "Ranadana", "phone_number": "818041131146" },
    { "name": "anushka", "phone_number": "393886317851" },
    { "name": "lakmali", "phone_number": "52 386 9502" },
    { "name": "Kushani", "phone_number": "8090951456" },
    { "name": "Nirmala fernando", "phone_number": "966580995542" },
    { "name": "nishantha Amarasingha", "phone_number": "527106213" },
    { "name": "shantha", "phone_number": "96597840711" },
    { "name": "Harsha", "phone_number": "8107044589979" },
    { "name": "Roy Pathiraja", "phone_number": "33754080330" },
    { "name": "Anjnan", "phone_number": "+96879070631" },
    { "name": "kanchana", "phone_number": "+971523130155" },
    { "name": "Chamara", "phone_number": "97333077317" },
    { "name": "Kavi", "phone_number": "971563255821" },
    { "name": "Manavi", "phone_number": "971554374883" },
    { "name": "dammika", "phone_number": "740727842" },
    { "name": "Ashen", "phone_number": "393930930347" },
    { "name": "akila", "phone_number": "94750736752" },
    { "name": "sunimal", "phone_number": "97470528266" },
    { "name": "benadict", "phone_number": "763413801" },
    { "name": "Pahan", "phone_number": "601126851455" },
    { "name": "Chinthaka", "phone_number": "817083636052" },
    { "name": "Ashan chamodya", "phone_number": "817054635755" },
    { "name": "Amasha Fernando", "phone_number": "61450227047" },
    { "name": "Sangeeth", "phone_number": "94743109281" },
    { "name": "suneru nipun", "phone_number": "971582312591" },
    { "name": "rangana perera", "phone_number": "09080024866" },
    { "name": "Amitha", "phone_number": "447526293572" },
    { "name": "suantha", "phone_number": "773276362" },
    { "name": "94776151691", "phone_number": "94776151691" },
    { "name": "inoka lakmali", "phone_number": "97431575191" },
    { "name": "Yeshani", "phone_number": "8098789509" },
    { "name": "Mohamed Nazeem", "phone_number": "971558477645" },
    { "name": "Thyaga Chandana", "phone_number": "7440779788" },
    { "name": "උශාද්", "phone_number": "+393514219528" },
    { "name": "jayawickrama", "phone_number": "33758658811" },
    { "name": "krishanthi", "phone_number": "971588374193" },
    { "name": "Lalindrajith Vitharana", "phone_number": "393894497047" },
    { "name": "Nisham", "phone_number": "7091160693" },
    { "name": "Nisal", "phone_number": "779650113" },
    { "name": "Nadeera", "phone_number": "569816700" },
    { "name": "yousuf", "phone_number": "447432476444" },
    { "name": "Nishantha", "phone_number": "971525073608" },
    { "name": "menikebandara", "phone_number": "601124239480" },
    { "name": "Darshana", "phone_number": "817090980296" },
    { "name": "Sheshan", "phone_number": "61474516256" },
    { "name": "Chathusi", "phone_number": "774149082" },
    { "name": "sunil de silva", "phone_number": "773136328" },
    { "name": "Shashikala sewwansi", "phone_number": "508829067" },
    { "name": "Lahiru", "phone_number": "769360099" },
    { "name": "sandun", "phone_number": "8098320279" },
    { "name": "sanduni Fernando", "phone_number": "+819015739936" },
    { "name": "shafra", "phone_number": "966578149110" },
    { "name": "ashan dhulanja", "phone_number": "701444157" },
    { "name": "narmada samaranayaka", "phone_number": "1168535431" },
    { "name": "janath", "phone_number": "971522178233" },
    { "name": "nilusha", "phone_number": "3336890952" },
    { "name": "Rashmi", "phone_number": "393802388882" },
    { "name": "Gomes", "phone_number": "761726767" },
    { "name": "Samudi", "phone_number": "766981486" },
    { "name": "Susmitha", "phone_number": "771874540" },
    { "name": "seetha", "phone_number": "568524584" },
    { "name": "priyanka", "phone_number": "96560311822" },
    { "name": "ayesha", "phone_number": "393381956851" },
    { "name": "Dinesh manjula", "phone_number": "703601724" },
    { "name": "amila", "phone_number": "769865297" },
    { "name": "Ranga", "phone_number": "33758835828" },
    { "name": "Dinusha Rajitha", "phone_number": "393296194108" },
    { "name": "Nipun De Silva", "phone_number": "971588299806" },
    { "name": "Brendon", "phone_number": "393276565402" },
    { "name": "Malaka", "phone_number": "94719685699" },
    { "name": "Ashan randika", "phone_number": "9710569093860" },
    { "name": "Sachintha Sandamal", "phone_number": "+819067457478" },
    { "name": "K C priyankara", "phone_number": "97338817486" },
    { "name": "Rumesh", "phone_number": "556638910" },
    { "name": "Nashan", "phone_number": "971505381964" },
    { "name": "sameera", "phone_number": "3887893841" },
    { "name": "Padindu", "phone_number": "94754761660" },
    { "name": "Chanes madush", "phone_number": "971565324691" },
    { "name": "danushka", "phone_number": "94777665629" },
    { "name": "Rameez", "phone_number": "96596671099" },
    { "name": "Duleep", "phone_number": "971553729540" },
    { "name": "Dushan Perera", "phone_number": "770088110" },
    { "name": "sarook", "phone_number": "503625688" },
    { "name": "yura", "phone_number": "971544344120" },
    { "name": "Ananda", "phone_number": "60182035102" },
    { "name": "Sadun senanayaka", "phone_number": "770333011" },
    { "name": "Navaneeth", "phone_number": "772407900" },
    { "name": "Surein", "phone_number": "779110141" },
    { "name": "nimala", "phone_number": "97466678278" },
    { "name": "Chasmitha omal", "phone_number": "551989447" },
    { "name": "Anne cahturika suwwandi", "phone_number": "96555618774" },
    { "name": "nirmesh", "phone_number": "971561430376" },
    { "name": "Malinda Randiligama", "phone_number": "971504023624" },
    { "name": "Ravindum", "phone_number": "971545165817" },
    { "name": "Rameela", "phone_number": "521879746" },
    { "name": "Shanira senarathna", "phone_number": "971501903074" },
    { "name": "asela", "phone_number": "393802023507" },
    { "name": "B.G.A Sanjeewa", "phone_number": "94772266388" },
    { "name": "ahinsa", "phone_number": "712613761" },
    { "name": "Manjula", "phone_number": "971551496043" },
    { "name": "Uditha", "phone_number": "757493805" },
    { "name": "sanjaya disanayaka", "phone_number": "769829235" },
    { "name": "Sanjeewa", "phone_number": "966504639474" },
    { "name": "Indunil Priyankara", "phone_number": "777579929" },
    { "name": "prasanna", "phone_number": "777556335" },
    { "name": "Harshani Randima", "phone_number": "393277652119" },
    { "name": "Anushi Wanigasinghe", "phone_number": "971552481215" },
    { "name": "Sara", "phone_number": "+393331007390" },
    { "name": "Kasun", "phone_number": "776044868" },
    { "name": "anthony", "phone_number": "96878569069" },
    { "name": "gayan fernando", "phone_number": "971529440016" },
    { "name": "dishan", "phone_number": "776954207" },
    { "name": "RUPASINGHA", "phone_number": "97230310895" },
    { "name": "nishan", "phone_number": "65186153" },
    { "name": "Shanaka", "phone_number": "971564842533" },
    { "name": "dilani", "phone_number": "971582905625" },
    { "name": "Indrajith", "phone_number": "97477843923" },
    { "name": "ayesha", "phone_number": "96550713314" },
    { "name": "Kasun fernando", "phone_number": "971521159865" },
    { "name": "Shyama", "phone_number": "971528713388" },
    { "name": "Mahesh", "phone_number": "971563861855" },
    { "name": "chathurika", "phone_number": "393883915075" },
    { "name": "Nadeeka keerthisinghe", "phone_number": "819023309816" },
    { "name": "vajira", "phone_number": "97337788272" },
    { "name": "Ahasya", "phone_number": "704476825" },
    { "name": "Cletus Builtjens", "phone_number": "94710861998" },
    { "name": "Dilini Ishara", "phone_number": "51674771" },
    { "name": "Nisal", "phone_number": "971503763430" },
    { "name": "jude", "phone_number": "971506759698" },
    { "name": "Nishantha", "phone_number": "97474440371" },
    { "name": "Thushan", "phone_number": "9049213166" },
    { "name": "Shamila damayanthi", "phone_number": "67698485" },
    { "name": "Lahiru", "phone_number": "971565997889" },
    { "name": "Anu saparamadu", "phone_number": "3427584290" },
    { "name": "rimzan", "phone_number": "96555938454" },
    { "name": "prasad", "phone_number": "534601851" },
    { "name": "Kanna", "phone_number": "770750261" },
    { "name": "Dinusha", "phone_number": "971544518536" },
    { "name": "vishaka", "phone_number": "971555942661" },
    { "name": "Naween", "phone_number": "564679123" },
    { "name": "viraj", "phone_number": "966501227194" },
    { "name": "Gayan", "phone_number": "971564541826" },
    { "name": "Please mkre details", "phone_number": "94765948170" }
  ]
  
  
  
  

  export default function BulkData() {

    const agentUsernames = [
      "ashani01",
      "shyara02",
      "hiruni03",
      "udayanga04",
      "isuru05",
      "indika06",
      "rasindu07",
      "avishka08",
      "manjula09",
      "rajitha10",
      "manuranga11",
      "saranga12",
      "akila13"
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
    
      return(
        <div>
          <Button onClick={() => insertDataWithDelay(data)}>Insert Bulk  Data</Button>
          <Button type="dashed" onClick={() => insertDummyTestLeadsForAgents(agentUsernames)}>
        Insert Dummy Test Leads for Agents
      </Button>
      <Button onClick={()=>{updateusername()}}>change user name </Button>
        </div>
      )

  }

