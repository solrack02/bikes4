// ------------- DEV VARs
// ----------------------
export const devVars: any = {
  all: {
    // ----- informações do
    //------ usuário logado
    userData: {
      userName: 'Carlos',
    },

    // ----- textos que não
    // ------- são alterados
    static: {
      teste: 'ola',
    },

    toggles: {},
  },
  sc: {
    A1: {},
    B1: {},
    AB0: {
      // sc.AB0.forms.toggles.userName

      forms: {
        toggles: {
          userName: 'false',
        },
      },
    },
  },
};

// ------------ MOCK DATA
// ----------------------
export const mock: any = {
  all: {
    // ----- informações do
    //------ usuário logado
    userData: {},

    // ----- textos que não
    // ------- são alterados
    static: {
      picker_b1_1: [
        { label: 'opção 1', id: 'opção 1' },
        { label: 'opção 2', id: 'opção 2' },
        { label: 'opção 3', id: 'opção 3' },
        { label: 'opção 4', id: 'opção 4' },
      ],
    },

    toggles: {
      picker_b1_1: {
        show: 'false',
      },
    },
  },
  sc: {
    A1: {},
    B1: {},
  },
};

// -------- Examples
// -----------------
const xxx3 = {};
