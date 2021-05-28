export function FrontasticRenderer({ data, components = {} }) {
  const { head, main, footer } = data.page.regions;
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {head.elements.map((cell: Cell) => (
          <CellComponent size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </CellComponent>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {main.elements.map((cell: Cell) => (
          <CellComponent size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </CellComponent>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {footer.elements.map((cell: Cell) => (
          <CellComponent size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </CellComponent>
        ))}
      </div>
    </div>
  );
}
