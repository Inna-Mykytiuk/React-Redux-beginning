//створюємо константи для екшенів щоб не допустити помилок при написанні рядків в різних місцях програми (в екшенах, редюсерах, компонентах)
export const statusFilters = Object.freeze({
  all: 'all',
  active: 'active',
  completed: 'completed',
});
