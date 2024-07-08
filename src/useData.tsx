import { create } from 'zustand';
import { initCt } from './';

console.log({ initCt });

export const useData = create(() => ({ ...initCt }));
