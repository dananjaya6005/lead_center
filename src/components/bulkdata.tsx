//@ts-nocheck
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')



const data = [
    { name: "shamila", phone_number: "075 7885858", email: "shamilaillyas@gmail.com" },
    { name: "chathuranga", phone_number: "0740398884", email: "chathu1994.adikari@gmail.com" },
    { name: "Lahiru", phone_number: "0758032502", email: "madushanjayarathne123@gmail.com" },
    { name: "N S Sanjeewani", phone_number: "0778362761", email: "shamilanakandala@gmail.com" },
    { name: "Prasanna Perera", phone_number: "0714116094", email: "prasanna.graphiclk@gmail.com" },
    { name: "achini", phone_number: "0706289437", email: "achini.bg@gmail.com" },
    { name: "Nisansala", phone_number: "0775474768", email: "sandamalinisansala907@gmail.com" },
    { name: "Sheran", phone_number: "0762625053", email: "senuridiasv@gmail.com" },
    { name: "tharaa", phone_number: "0717276634", email: "tharaaharshi@gmail.com" },
    { name: "sanjeewa perera", phone_number: "0760351174", email: "sanjeewap62@gmail.com" },
    { name: "sampath", phone_number: "0740068120", email: "sampthlalsiri@gmail.com" },
    { name: "RMK Kulathunga", phone_number: "0706673475", email: "kkulathunga1111@gmail.com" },
    { name: "iresha", phone_number: "07 77136059", email: "virangasadun@email.com" },
    { name: "Supun Rangana", phone_number: "0710778344", email: "supunrangana@gmail.com" },
    { name: "priyadarshani", phone_number: "0773898922", email: "madhushipriyadharshani@gmail.com" },
    { name: "shakir", phone_number: "0740578757", email: "suduputha@gmail.com" },
    { name: "Herath", phone_number: "0757575900", email: "chulanandaherath@gmail.com" },
    { name: "Preethika Madushan", phone_number: "0779926557", email: "Preethikamadushan908@gmail.com" },
    { name: "nirosha hansini", phone_number: "0716613330", email: "dilshanpathum533@gmail.com" },
    { name: "Champka", phone_number: "0766125543", email: "champakafernando94@gmail.com" },
    { name: "Theruni", phone_number: "0759203106", email: "theruninawodya@gmail.com" },
    { name: "taniya", phone_number: "0761425211", email: "taniyahansani50@gmail.com" },
    { name: "suresh", phone_number: "0770391969", email: "sureshchandima.456@gmail.com" },
    { name: "Dilumi", phone_number: "0779663402", email: "dilumilakshini93@gmail.com" },
    { name: "Saroja", phone_number: "0770513703", email: "sarojagunathilaka820@gmail.com" },
    { name: "manjula wasantha", phone_number: "0740612972", email: "wasanthamahawedage67@gmail.com" },
    { name: "sajith Amarasuriya", phone_number: "0777334124", email: "sajithjanaka.amarasuriya@gmail.com" },
    { name: "samitha", phone_number: "0769315504", email: "samitharuwangala@gmail.com" },
    { name: "sapna", phone_number: "0755776308", email: "sapudiwynjalee1997@gmail.com" },
    { name: "Inusha sewwandi kodikara", phone_number: "0713038042", email: "inushakodikara@gmail.com" },
    { name: "p.m.d.gomes", phone_number: "0760185833", email: "manojadilrukshi294@gmail.com" },
    { name: "lakshitha", phone_number: "0773451841", email: "chandhi82lakshi@gmail.com" },
    { name: "prageeeth", phone_number: "0743193558", email: "prageethrukshan@gmail.com" },
    { name: "SEWWANDI", phone_number: "0706663393", email: "sewwandikaluarachchi6@gmail.com" },
    { name: "indika", phone_number: "0711495661", email: "sadaruwan820indika@gmail.com" },
    { name: "gamini kobewatta", phone_number: "0768918130", email: "gaminikobewatta@gmail.com" },
    { name: "udaya", phone_number: "0771936529", email: "udaya0256@gmail.com" },
    { name: "ruwan", phone_number: "0717574507", email: "lakshitha.ruwan.1227@gmail.com" },
    { name: "k krishanthi", phone_number: "0783558471", email: "krishanthisamanthika582@gmail.com" },
    { name: "dileepa", phone_number: "0777246965", email: "hasindu123dileepa@gmail.com" },
    { name: "Ishara Roshani", phone_number: "0743688911", email: "roshiniishara0@gmail.com" },
    { name: "Nadeeka lakmini", phone_number: "0779731651", email: "nadeekalakmini1984@gmail.com" },
    { name: "Hansi", phone_number: "0740196503", email: "Wik.Shanuka@gmail.com" },
    { name: "Rangika", phone_number: "0779200566", email: "rangikadilrukshi1992@gmail.com" },
    { name: "kavindya", phone_number: "0703493618", email: "malithikavindya722@gmail.com" },
    { name: "dhammika", phone_number: "0761444978", email: "dammikasiwwandi1991@gmail.com" },
    { name: "Roshan Gunathilake", phone_number: "0771328295", email: "roshangunathilake162@gmail.com" },
    { name: "Inoka", phone_number: "0773708016", email: "inokanc@gmail.com" },
    { name: "ruwani", phone_number: "0772310592", email: "druwani96@gmail.com" },
    { name: "Anjana dasun", phone_number: "0777428585", email: "anjanadasun0@gmail.com" },
    { name: "s.w manoj", phone_number: "0771659155", email: "wenura475@gmail.com" },
    { name: "Shanika Lakmini", phone_number: "0712906746", email: "maslakmini@gmail.com" },
    { name: "chathurika", phone_number: "0711857333", email: "samanmalichathurika35@gmail.com" },
    { name: "shshika madhawa rupasingha", phone_number: "0759732727", email: "shshikamadhawa@gmail.com" },
    { name: "Rashmika", phone_number: "0751817366", email: "rashmikanipun2001@gmail.com" },
    { name: "danushka", phone_number: "0715557722", email: "danushkaudanawickramasinghe@gmail.com" },
    { name: "nuwan", phone_number: "0702427760", email: "kalharakalhara2@gmail.com" },
    { name: "isuru silva", phone_number: "0778974397", email: "isurusilva8822@gmail.com" },
    { name: "shanu", phone_number: "0760046381", email: "shanikamadushani968@gmail.com" },
    { name: "Sanuja", phone_number: "0770561433", email: "jayamalamarasinghe@gmail.com" },
    { name: "S.Sujatha", phone_number: "077 6147192", email: "sujathaflorance@gmail.com" },
    { name: "Charuka", phone_number: "0704707002", email: "diloshancharuka94@gmail.com" },
    { name: "thushan", phone_number: "0781339320", email: "thushanhirusha2002@gmail.com" },
    { name: "Nayanajith", phone_number: "0743916497", email: "nayanajithp1017@gmail.com" },
    { name: "sandaruwan", phone_number: "0777452226", email: "sampathsadaruwan90@gmail.com" },
    { name: "Himaz", phone_number: "0769244273", email: "hemashar676@gmail.com" },
    { name: "janaka", phone_number: "0707911556", email: "djskodikara1989@gmail.com" },
    { name: "kasun pushpa kumara rodrigo", phone_number: "0719096067", email: "promocreationsinfo@gmail.com" },
    { name: "kaushalya", phone_number: "0770328072", email: "wajiranikaushalya@gmail.com" },
    { name: "Rangana jayashantha", phone_number: "0770880284", email: "Kodikararangana@gmail.com" },
    { name: "hasitha silva", phone_number: "0754503323", email: "hasithasilvs@gmail.com" },
    { name: "Roshani", phone_number: "0759691422", email: "roshaniwickramasingje@gmail.com" },
    { name: "Muditha Rubasinghe", phone_number: "0706075035", email: "rubasinghemuditha81@gmail.com" },
    { name: "Isuru lakmal", phone_number: "0706020762", email: "lakmalisuru132@gmail.com" },
    { name: "koheda meka thiyenne", phone_number: "0779510944", email: "alpoliticalsceince@gmail.com" },
    { name: "nimmi", phone_number: "0743711983", email: "nilakshinimmi@gmail.com" }
  ];

  export default function BulkData() {

    const generateRandomLeadID = () => {
        return Math.floor(Math.random() * 1e15).toString().padStart(15, '0');
      }
      
      const insertDataWithDelay = async (data) => {
        for (let i = 0; i < data.length; i++) {
          const { name, phone_number, email } = data[i];
          const fullName = name;
          const phone = phone_number;
          const userName = 'risath01';
          const leadID = generateRandomLeadID();
          const project = 'Feb - 2025 - General';
          const supivisor_userName = 'df_supervisor1';
          const top_level_userName = 'df_ceo1';
          const organization_name = 'Devthuru Furnitures';
          const pageID = '534584599737695';
          const formID = '1292300801819900';

      
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
    
      return(
        <div>
          <Button onClick={() => insertDataWithDelay(data)}>Insert Bulk  Data</Button>
        </div>
      )

  }

