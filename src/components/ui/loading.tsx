interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

export default function Loading({ size = 'medium', fullScreen = true }: LoadingProps) {
  // Adjust size based on the prop
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-4',
    large: 'w-12 h-12 border-4'
  };
  
  // If fullScreen is false, use minimal height
  const containerClasses = fullScreen 
    ? 'flex items-center justify-center min-h-screen bg-[#111]' 
    : 'flex items-center justify-center py-12 bg-[#111]';
  
  return (
    <div className={containerClasses}>
      <div className={`${sizeClasses[size]} border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
    </div>
  );
} 