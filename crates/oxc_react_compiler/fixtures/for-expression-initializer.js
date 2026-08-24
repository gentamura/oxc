function Component({start, end}) {
  let index;
  let initCount = 0;
  const values = [];

  for (index = 0; index < start; index++) {
    values.push(index);
  }

  for (index = start, initCount++; index < end; index++) {
    values.push(index);
  }

  return `${initCount}:${values.join(',')}`;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{start: 1, end: 3}],
  sequentialRenders: [
    {start: 2, end: 5},
    {start: 4, end: 4},
  ],
};
