  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
