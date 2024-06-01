export default {
  name: "DefinitionsList",
  props: {
    data: Array
  },
  render() {
    return (
      <dl>
        {
          (Array.isArray(this.data)) && this.data.map(({ dt, dd, id }) => {
            return (
              <>
                <dt key={`${id}-dt`}>{ dt }</dt>
                <dd key={`${id}-dd`}>{ dd }</dd>
              </>
            );
          })
        }
      </dl>
    );
  }
};