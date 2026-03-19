export const students = [
  { id: 1, name: 'Carlos Mendes',    stage: 'Aula Prática',  progress: 75, status: 'active',  origin: 'Instagram', avatar: 'CM' },
  { id: 2, name: 'Ana Paula Silva',  stage: 'Exame Médico',  progress: 45, status: 'pending', origin: 'Google',    avatar: 'AP' },
  { id: 3, name: 'Pedro Rodrigues',  stage: 'Aula Teórica',  progress: 30, status: 'active',  origin: 'Indicação', avatar: 'PR' },
  { id: 4, name: 'Juliana Costa',    stage: 'Habilitada ✓',  progress: 100,status: 'done',    origin: 'Instagram', avatar: 'JC' },
  { id: 5, name: 'Rafael Santos',    stage: 'Cadastro',      progress: 10, status: 'alert',   origin: 'Anúncio',   avatar: 'RS' },
  { id: 6, name: 'Mariana Lima',     stage: 'Pagamento',     progress: 20, status: 'pending', origin: 'Google',    avatar: 'ML' },
  { id: 7, name: 'Thiago Oliveira',  stage: 'Prova Final',   progress: 90, status: 'active',  origin: 'Instagram', avatar: 'TO' },
]

export const kanbanColumns = [
  {
    id: 'lead',
    title: 'Lead',
    count: 12,
    color: 'cyan',
    cards: ['Marcos Silva', 'Letícia Rocha', 'Bruno Carvalho'],
  },
  {
    id: 'contact',
    title: 'Contato',
    count: 8,
    color: 'purple',
    cards: ['Fernanda M.', 'Diego Costa'],
  },
  {
    id: 'docs',
    title: 'Documentação',
    count: 6,
    color: 'amber',
    cards: ['Pedro R.', 'Simone A.'],
  },
  {
    id: 'payment',
    title: 'Pagamento',
    count: 5,
    color: 'blue',
    cards: ['Ana Paula'],
  },
  {
    id: 'active',
    title: 'Ativo',
    count: 14,
    color: 'green',
    cards: ['Carlos M.', 'Juliana C.'],
  },
]

export const metrics = [
  { label: 'Leads em aberto', value: 12, delta: '+4 este mês',  trend: 'up',   color: 'cyan'   },
  { label: 'Alunos ativos',   value: 48, delta: '+6 este mês',  trend: 'up',   color: 'blue'   },
  { label: 'Pend. pagamento', value: 5,  delta: '-2 vs anterior', trend: 'down', color: 'amber'  },
  { label: 'Concluídos',      value: 14, delta: '+3 este mês',  trend: 'up',   color: 'green'  },
]
