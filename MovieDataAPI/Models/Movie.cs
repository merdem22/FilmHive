﻿using System;
namespace MovieDataAPI.Models
{
	public class Movie
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string Genre { get; set; }
		public int ReleaseYear { get; set; }
		public string Director { get; set; }
		public string PosterUrl { get; set; }
	}
}

