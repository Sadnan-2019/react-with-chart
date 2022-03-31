import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {


          const [phones,setPhones] =useState([]);
          useEffect(()=>{

                    axios.get(`https://openapi.programming-hero.com/api/phones?search=samsung`)
                    .then(response=>{

                              const loadData=response.data.data;
                              // console.log(loadData)
                              const phoneMap=loadData.map(phone=>{
                                        
                                        const parts=phone.slug.split("-");
                                        const dividedParts={

                                                  name:parts[0],
                                                  value:parts[1]

                                        };
                                        return dividedParts;

                                         
                              
                              });
                              setPhones(phoneMap)
                              //  console.log(phoneMap)
                               


                    })
          },[])
          return (
                    <div>
                           <BarChart width={1000} height={400} data={phones}>
          <Bar dataKey="value" fill="red" />
          <XAxis dataKey={"name"}></XAxis>
          <Tooltip></Tooltip>
          <YAxis></YAxis>
        </BarChart>    
                    </div>
          );
};

export default SpecialChart;