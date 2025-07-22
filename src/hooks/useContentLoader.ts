
import { useState, useEffect } from 'react';

export interface ContentFile {
  meta?: {
    description?: string;
    lastUpdated?: string;
    editInstructions?: string;
  };
  [key: string]: any;
}

/**
 * Custom hook to load JSON content files
 */
export function useContentLoader<T = ContentFile>(filePath: string, fallback?: T) {
  const [content, setContent] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(filePath);
        
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        console.error(`Error loading content from ${filePath}:`, err);
        
        if (fallback) {
          setContent(fallback);
        }
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [filePath, fallback]);

  return { content, loading, error };
}

/**
 * Hook to load multiple content files at once
 */
export function useMultipleContentLoader<T = ContentFile>(
  files: Array<{ path: string; key: string; fallback?: T }>
) {
  const [content, setContent] = useState<Record<string, T>>({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadAllContent = async () => {
      setLoading(true);
      const newContent: Record<string, T> = {};
      const newErrors: Record<string, string> = {};

      await Promise.all(
        files.map(async ({ path, key, fallback }) => {
          try {
            const response = await fetch(path);
            
            if (!response.ok) {
              throw new Error(`Failed to load ${key}: ${response.status}`);
            }

            const data = await response.json();
            newContent[key] = data;
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            newErrors[key] = errorMessage;
            console.error(`Error loading ${key} from ${path}:`, err);
            
            if (fallback) {
              newContent[key] = fallback;
            }
          }
        })
      );

      setContent(newContent);
      setErrors(newErrors);
      setLoading(false);
    };

    loadAllContent();
  }, [files]);

  return { content, loading, errors };
}
