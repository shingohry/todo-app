export type FilterType = 'all' | 'active' | 'completed';

interface Props {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: Props) {
  return (
    <div className="todo-filter">
      <span className="todo-count">
        残り: <strong>{activeCount}</strong> 件
      </span>
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => onFilterChange('all')}
        >
          すべて
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => onFilterChange('active')}
        >
          未完了
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => onFilterChange('completed')}
        >
          完了済み
        </button>
      </div>
      {completedCount > 0 && (
        <button className="clear-btn" onClick={onClearCompleted}>
          完了を削除
        </button>
      )}
    </div>
  );
}
