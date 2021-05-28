export function FrontasticComponent({components, block, streams,
                                     highlight = false}) {
  const Component = components[block.tasticType] || components["default"];
  return (
    <div className={`w-full ${highlight && "ring-8 ring-pink-500"} `}>
      <Component
        type={block?.tasticType}
        id={block?.tasticId}
        data={block?.configuration}
        stream={block?.configuration.stream && streams
          ? streams[block.configuration.stream]
          : null}
      />
    </div>
  );
}
