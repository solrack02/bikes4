
            // file: root/index1.tsx
            
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Variables Pack
import { create } from 'zustand';

// ---------- import Local Tools
import {mapElements} from './tools/base/project/mapElements';
import * as functions from './tools/base/functions';
import * as Elements from './tools/base/Elements';
import { Project } from './tools/base/project/';
import * as jsvals from './tools/base/jsvals';
import { props } from './tools/base/props';
import * as customs from './tools/customs';
import * as stls from './tools/base/stls';
import { tools } from './tools';

// ---------- set Caps Inputs
const currRoute = 'ab0login'

let args = [];

const screens = [
  

(...args) => <Screen3 pass={{
  pathScreen:"ab0login",

  styles:[
width({ pass: { arrayValue: [j8({pass: {
          propertieValues: "100%"
        }})] }}), 
height({ pass: { arrayValue: [j8({pass: {
          propertieValues: "100%"
        }})] }}), backgroundColor({ pass: { arrayValue: [j8({pass: {
          propertieValues: "green"
        }})] }})],

  screenElements:[
(...args) => <Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            
        color({ pass: { arrayValue: ["red"] }}), 
        fontSize({ pass: { arrayValue: [14] }}), fontWeight({ pass: { arrayValue: ['bold'] }})
          ],

          children: [
            j8({pass: {
          propertieValues: "navbar"
        }})
          ],

          args,

        }}/>, (...args) => <Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><RN.Text style={{color:'white'}}>{'Click Here!'}</RN.Text>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return goTo("a2");
        }
        ],

          args,
        }}/>],

  startFunctions:[async (...args) =>
        setVar({ args, pass:{
          keyPath: ['example.A1.lists.iptsChanges.name'],
          value: 'no value'
        }})],

  args,
}}/>
, 
(...args) => <Screen3 pass={{
  pathScreen:"a2",

  styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

  screenElements:[(...args) => <Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><RN.Text style={{color:'white'}}>{'Click Here!'}</RN.Text>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return goTo("ab0login");
        }
        ],

          args,
        }}/>],

  startFunctions:[()=>{}],

  args,
}}/>

]

const initCt = () => ({
  true: "true"
});
const initObj = initCt();
// console.log(initObj);

const arrInitFuncs = [
  async (...args) =>
        setVar({ args, pass:{
          keyPath: ['example.A1.lists.iptsChanges.name'],
          value: 'no value'
        }})
];

export const useRoutes = create(() => ({ currRoute }));

// ---------- set Main Component
export default function Router() {

  return (
    <Project
      configData={{
        screens,
        initCt,
        arrInitFuncs,
      }}
    />
  );
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});

        