export default (a, b) =>
  b
    ? // This is a name, key, and value set
      { type: a, ...b }
: // This is when
the first arg is a function
      { type: a.name || '*update*', fn: a };
